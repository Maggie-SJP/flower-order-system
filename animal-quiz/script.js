const QUESTIONS = [
  {
    question: "Which Australian colony experienced a major gold rush after discoveries were announced in 1851?",
    choices: ["South Australia", "Victoria", "Tasmania", "Western Australia"],
    correct: 1,
    fact: "Gold was first found near Bathurst in New South Wales in 1851, but when rich deposits were found at Ballarat and Bendigo later that year, Victoria became the true centre of Australia's gold rush.",
  },
  {
    question: "What happened in Australia after news of the gold discoveries spread?",
    choices: [
      "The population of the goldfields decreased",
      "Large numbers of people travelled to the goldfields",
      "The government stopped people from mining",
      "All mining was moved underground",
    ],
    correct: 1,
    fact: "Word of the discoveries spread quickly, and tens of thousands of people — from other Australian colonies and overseas — rushed to the goldfields hoping to strike it rich.",
  },
  {
    question: "Which group became a significant part of the population on the Victorian goldfields?",
    choices: ["Chinese migrants", "Spanish sailors", "South American soldiers", "African explorers"],
    correct: 0,
    fact: "By the mid-1850s, thousands of Chinese migrants had arrived on the Victorian goldfields, becoming one of the largest and most significant migrant groups of the gold rush era.",
  },
  {
    question: "What was one reason the Victorian government introduced mining licences?",
    choices: ["To raise money from miners", "To give miners free equipment", "To stop people travelling to Victoria", "To provide miners with houses"],
    correct: 0,
    fact: "The government introduced a licence fee largely as a way to raise revenue from the goldfields — miners had to pay it whether or not they'd actually found any gold.",
  },
  {
    question: "How often did miners have to pay for their licence?",
    choices: ["Every month", "Every three months", "Every six months", "Once a year"],
    correct: 0,
    fact: "Miners were required to pay for their licence every month, regardless of whether their digging had earned them anything — a major source of resentment on the goldfields.",
  },
  {
    question: "What event in 1853 increased tensions between miners and the Victorian government?",
    choices: ["The discovery of gold at Ophir", "The opening of the first railway", "The burning of the Eureka Hotel", "The arrival of Peter Lalor"],
    correct: 2,
    fact: "The burning of the Eureka Hotel followed the acquittal of its owner, James Bentley, over the death of miner James Scobie — an event that inflamed miners' anger at corruption and injustice on the goldfields.",
  },
  {
    question: "What was the name of the miner whose death at the Eureka Hotel became an important part of the events leading to the Eureka Stockade?",
    choices: ["Peter Lalor", "James Scobie", "Edward Hargraves", "John Basson Humffray"],
    correct: 1,
    fact: "James Scobie's death outside the Eureka Hotel, and the widely resented acquittal of the hotel's owner, became a rallying point for miners' grievances in the lead-up to the Eureka Stockade.",
  },
  {
    question: "What did the miners' Southern Cross flag at Eureka represent?",
    choices: ["Their support for the British government", "Their demand for miners' rights and political reform", "Their wish to leave Australia", "Their support for the gold licence"],
    correct: 1,
    fact: "The Southern Cross flag, flown by the miners at Eureka, became a powerful symbol of their demand for political rights and fair treatment — not a rejection of Britain itself.",
  },
  {
    question: "Who was the main leader of the miners during the Eureka Stockade?",
    choices: ["Peter Lalor", "Edward Hargraves", "Governor Hotham", "James Scobie"],
    correct: 0,
    fact: "Peter Lalor emerged as the miners' leader at the Eureka Stockade, later going on to become a member of the Victorian parliament.",
  },
  {
    question: "On what date did the Eureka Stockade battle take place?",
    choices: ["1 January 1851", "3 December 1854", "11 November 1854", "25 April 1855"],
    correct: 1,
    fact: "The Eureka Stockade battle took place in the early hours of 3 December 1854, when government troops stormed the miners' stockade at Ballarat.",
  },
];

const TL = 20000; // ms per question
const MAXP = 1000;
const MINP = 200;
const PEER_PREFIX = "eureka-quiz-";

function $(id) { return document.getElementById(id); }

function showScreen(id) {
  [
    "s-home", "s-host-dashboard", "s-join",
    "s-player-game", "s-player-waiting", "s-player-final", "s-host-final",
  ].forEach((s) => {
    const el = $(s);
    if (!el) return;
    el.classList.toggle("active", s === id);
  });
}

function genCode() {
  const c = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 6; i++) s += c[Math.floor(Math.random() * c.length)];
  return s;
}

function calcPts(ms) {
  return Math.round(MINP + (MAXP - MINP) * Math.max(0, 1 - ms / TL));
}

// ============================================================
// Shared state
// ============================================================
let peer = null;
let isHost = false;
let qi = 0;
let timerInterval = null;

// ============================================================
// HOST state & logic
// A host never plays. It just watches each player's own
// independent, self-paced run through all 10 questions, and
// reveals the leaderboard whenever it clicks "Finish Game".
// ============================================================
let players = new Map(); // peerId -> { conn, name, score, correctCount, answered: Set<qi>, connected }

function goHome() {
  if (timerInterval) clearInterval(timerInterval);
  if (reconnectTimer) { clearTimeout(reconnectTimer); reconnectTimer = null; }
  if (peer) { try { peer.destroy(); } catch (e) {} }
  peer = null;
  isHost = false;
  qi = 0;
  players = new Map();
  myScore = 0; myAnswers = []; myRawAnswers = []; myConn = null; myName = "";
  hostPeerId = null; hasStartedPlaying = false; reconnectAttempts = 0; answered = false;
  showScreen("s-home");
}

function goHost() {
  isHost = true;
  showScreen("s-host-dashboard");
  const code = genCode();
  $("code-disp").textContent = code;
  $("host-err").textContent = "";
  $("host-status").textContent = "Connecting to server…";
  renderProgress();

  peer = new Peer(PEER_PREFIX + code);
  peer.on("open", () => {
    $("host-status").textContent = "Ready. Share the code above — diggers can join now.";
  });
  peer.on("connection", (conn) => wireNewPlayer(conn));
  peer.on("error", (e) => {
    $("host-err").textContent = "Connection error (" + e.type + "). Try again.";
  });
}

function wireNewPlayer(conn) {
  const id = conn.peer;
  const existing = players.get(id);
  if (existing) {
    // Same peer ID reconnecting (PeerJS keeps a guest's own ID stable across
    // reconnects) — reattach the new connection without wiping their progress.
    existing.conn = conn;
    existing.connected = true;
  } else {
    players.set(id, { conn, name: "", score: 0, correctCount: 0, answered: new Set(), connected: true });
  }

  conn.on("data", (d) => {
    const p = players.get(id);
    if (!p) return;
    if (d.type === "name") {
      p.name = d.name;
      renderProgress();
    }
    if (d.type === "ans") {
      recordAnswer(id, d.qi, d.a, d.ms);
    }
  });

  conn.on("close", () => {
    const p = players.get(id);
    if (p) p.connected = false;
    renderProgress();
  });
}

function recordAnswer(playerId, questionIdx, aIdx, ms) {
  const p = players.get(playerId);
  if (!p || p.answered.has(questionIdx)) return;
  p.answered.add(questionIdx);

  const q = QUESTIONS[questionIdx];
  const correct = aIdx >= 0 && aIdx === q.correct;
  if (correct) {
    p.score += calcPts(ms);
    p.correctCount += 1;
  }
  renderProgress();
}

function renderProgress() {
  const rows = Array.from(players.values()).filter((p) => p.name);
  $("host-progress-count").textContent = rows.length;
  const list = $("host-progress-list");
  const total = QUESTIONS.length;

  if (rows.length === 0) {
    list.innerHTML = '<p class="roster-empty">No one has joined yet.</p>';
    return;
  }

  list.innerHTML = rows
    .map((p) => {
      const done = p.answered.size >= total;
      return `
        <div class="roster-row progress-row">
          <span class="roster-dot"></span>
          <span class="progress-name">${p.name}${p.connected ? "" : " (left)"}</span>
          <span class="progress-count">${p.answered.size}/${total}</span>
          <span class="progress-score">${p.score} pts</span>
          ${done ? '<span class="progress-badge">Done</span>' : ""}
        </div>
      `;
    })
    .join("");
}

function broadcast(msg) {
  players.forEach((p) => {
    if (p.conn && p.conn.open) p.conn.send(msg);
  });
}

function endGame() {
  const leaderboard = Array.from(players.entries())
    .filter(([, p]) => p.name)
    .map(([id, p]) => ({ id, name: p.name, score: p.score, correct: p.correctCount }))
    .sort((a, b) => b.score - a.score);

  broadcast({ type: "over", leaderboard });
  renderHostLeaderboard(leaderboard);
  showScreen("s-host-final");
}

function renderHostLeaderboard(leaderboard) {
  $("host-final-stamp").textContent = leaderboard.length ? `Winner: ${leaderboard[0].name}` : "No Players";
  $("leaderboard-list").innerHTML = leaderboard
    .map((row, i) => `
      <div class="leaderboard-row ${i === 0 ? "top" : ""}">
        <span class="leaderboard-rank">${i + 1}</span>
        <span class="leaderboard-name">${row.name}</span>
        <span class="leaderboard-stats"><b>${row.score}</b> pts &middot; ${row.correct}/${QUESTIONS.length} &middot; ${Math.round((row.correct / QUESTIONS.length) * 100)}%</span>
      </div>
    `)
    .join("");
}

// ============================================================
// PLAYER (guest) state & logic
// Each player runs their own independent loop through all 10
// questions the moment they join, starting at Question 1 no
// matter when they connect. Scores stay private to that player
// until the host ends the game and broadcasts the leaderboard.
// ============================================================
let myConn = null;
let myName = "";
let myScore = 0;
let myAnswers = [];
let myRawAnswers = []; // {qi, a, ms} for every answer sent — replayed on reconnect so the host catches up
let answered = false;
let hostPeerId = null;
let hasStartedPlaying = false;
let reconnectTimer = null;
let reconnectAttempts = 0;
const MAX_RECONNECT_ATTEMPTS = 20;

function doJoin() {
  const name = $("guest-name").value.trim() || "Guest";
  const code = $("code-input").value.trim().toUpperCase();
  if (code.length !== 6) {
    $("join-err").textContent = "Please enter the 6-character game code.";
    return;
  }
  isHost = false;
  myName = name;
  myScore = 0;
  myAnswers = [];
  myRawAnswers = [];
  hasStartedPlaying = false;
  hostPeerId = PEER_PREFIX + code;
  $("join-status").textContent = "Connecting…";
  $("join-err").textContent = "";
  $("join-btn").disabled = true;

  peer = new Peer();
  peer.on("open", () => {
    $("join-status").textContent = "Finding host…";
    connectToHost();
  });
  peer.on("error", () => {
    if (!hasStartedPlaying) {
      $("join-err").textContent = "Couldn't connect. Check the code and try again.";
      $("join-btn").disabled = false;
    }
  });
}

function connectToHost() {
  wireGuestConn(peer.connect(hostPeerId, { reliable: true }));
}

function wireGuestConn(conn) {
  myConn = conn;

  conn.on("open", () => {
    reconnectAttempts = 0;
    setConnStatus(true);
    conn.send({ type: "name", name: myName });

    if (!hasStartedPlaying) {
      hasStartedPlaying = true;
      qi = 0;
      showPlayerQuestion(0, Date.now() + TL);
    } else {
      // Reconnected mid-game (or after finishing): resend every answer so
      // far in case the host's dashboard missed any while we were offline.
      myRawAnswers.forEach((a) => conn.send({ type: "ans", ...a }));
    }
  });

  conn.on("data", (d) => {
    if (d.type === "over") showPlayerFinal(d.leaderboard);
  });

  conn.on("close", () => scheduleReconnect());
  conn.on("error", () => scheduleReconnect());
}

function scheduleReconnect() {
  setConnStatus(false);
  if (reconnectTimer || !hasStartedPlaying) return;
  if (reconnectAttempts >= MAX_RECONNECT_ATTEMPTS) return;
  reconnectAttempts += 1;
  reconnectTimer = setTimeout(() => {
    reconnectTimer = null;
    if (peer && !peer.destroyed) connectToHost();
  }, 3000);
}

function setConnStatus(ok) {
  const el = $("conn-status");
  if (el) el.style.display = ok ? "none" : "block";
}

function showPlayerQuestion(idx, dl) {
  if (timerInterval) clearInterval(timerInterval);
  answered = false;
  showScreen("s-player-game");
  $("result-panel").classList.remove("visible");

  const q = QUESTIONS[idx];
  $("specimen-label").textContent = `Question ${String(idx + 1).padStart(2, "0")} / ${QUESTIONS.length}`;
  $("rail-fill").style.width = `${(idx / QUESTIONS.length) * 100}%`;
  $("question-text").textContent = q.question;
  $("my-score").textContent = myScore;

  const answerBtns = Array.from(document.querySelectorAll("#answers-grid .answer-btn"));
  answerBtns.forEach((btn, i) => {
    btn.querySelector(".answer-text").textContent = q.choices[i];
    btn.classList.remove("correct", "wrong", "dim");
    btn.disabled = false;
    btn.onclick = () => submitAnswer(i, dl);
  });

  function tick() {
    const rem = Math.max(0, dl - Date.now());
    $("light-fill").style.width = `${(rem / TL) * 100}%`;
    $("light-fill").style.backgroundColor = rem <= 5000 ? "var(--wrong)" : "";
    $("timer-label").textContent = `${Math.ceil(rem / 1000)}s`;
    if (rem <= 0 && !answered) {
      clearInterval(timerInterval);
      submitAnswer(-1, dl);
    }
  }
  tick();
  timerInterval = setInterval(tick, 100);
}

function submitAnswer(aIdx, dl) {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);

  const elapsed = Date.now() - (dl - TL);
  const ms = Math.min(TL, Math.max(0, elapsed));
  const q = QUESTIONS[qi];
  const correct = aIdx >= 0 && aIdx === q.correct;
  const pts = correct ? calcPts(ms) : 0;

  const answerBtns = Array.from(document.querySelectorAll("#answers-grid .answer-btn"));
  answerBtns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add("correct");
    else if (i === aIdx) btn.classList.add("wrong");
    else btn.classList.add("dim");
  });

  if (correct) myScore += pts;
  $("my-score").textContent = myScore;

  myAnswers.push({
    correctText: q.choices[q.correct],
    guess: aIdx < 0 ? "No answer" : q.choices[aIdx],
    isCorrect: correct,
  });

  const panel = $("result-panel");
  panel.classList.add("visible");
  panel.classList.remove("is-correct", "is-wrong");
  panel.classList.add(correct ? "is-correct" : "is-wrong");
  $("result-stamp").textContent = aIdx < 0 ? "Time's Up" : (correct ? "Correct" : "Incorrect");
  $("result-correct-answer").querySelector("b").textContent = q.choices[q.correct];
  $("result-fact").textContent = q.fact;
  $("result-points").textContent = pts > 0 ? `+${pts} points` : "+0 points";
  $("player-next-btn").textContent = qi === QUESTIONS.length - 1 ? "Finish My Round" : "Next Question";

  myRawAnswers.push({ qi, a: aIdx, ms });
  if (myConn && myConn.open) myConn.send({ type: "ans", qi, a: aIdx, ms });
}

function playerAdvance() {
  qi++;
  if (qi >= QUESTIONS.length) {
    const correctCount = myAnswers.filter((a) => a.isCorrect).length;
    $("player-waiting-summary").textContent = `You answered ${correctCount} / ${QUESTIONS.length} correctly. Your score: ${myScore}.`;
    showScreen("s-player-waiting");
  } else {
    showPlayerQuestion(qi, Date.now() + TL);
  }
}

function showPlayerFinal(leaderboard) {
  if (timerInterval) clearInterval(timerInterval);
  showScreen("s-player-final");

  const myId = peer ? peer.id : null;
  const idx = leaderboard.findIndex((row) => row.id === myId);
  const total = leaderboard.length;
  $("player-rank").textContent = idx >= 0 ? `${ordinal(idx + 1)} of ${total} Diggers` : "Results";
  $("player-final-score").textContent = myScore;

  const correctCount = myAnswers.filter((a) => a.isCorrect).length;
  $("player-correct-summary").textContent = `You answered ${correctCount} / ${QUESTIONS.length} correctly`;

  $("player-summary").innerHTML = myAnswers
    .map((a, i) => {
      const statusClass = a.isCorrect ? "correct" : "wrong";
      const guessLine = a.isCorrect ? "" : `<div class="summary-guess">You answered: ${a.guess}</div>`;
      return `
        <div class="summary-row ${statusClass}">
          <div class="summary-text">
            <div class="summary-species">${i + 1}. ${a.correctText}</div>
            ${guessLine}
          </div>
          <div class="summary-status ${statusClass}">${a.isCorrect ? "Correct" : "Missed"}</div>
        </div>
      `;
    })
    .join("");
}

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// ============================================================
// Wiring
// ============================================================
$("btn-host").addEventListener("click", goHost);
$("btn-join").addEventListener("click", () => showScreen("s-join"));
$("join-btn").addEventListener("click", doJoin);
$("host-finish-btn").addEventListener("click", endGame);
$("player-next-btn").addEventListener("click", playerAdvance);
$("code-input").addEventListener("input", (e) => {
  e.target.value = e.target.value.toUpperCase();
});
document.querySelectorAll("[data-goto]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.goto;
    if (target === "s-home") goHome();
    else showScreen(target);
  });
});

showScreen("s-home");

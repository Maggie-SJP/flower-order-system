const ICONS = {
  octopus: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="50" cy="34" rx="23" ry="19"/><circle cx="41" cy="30" r="2.5" fill="currentColor" stroke="none"/><circle cx="59" cy="30" r="2.5" fill="currentColor" stroke="none"/><path d="M29 46 C22 56 16 60 20 76"/><path d="M37 51 C32 64 26 70 30 84"/><path d="M45 54 C43 70 39 76 41 88"/><path d="M55 54 C57 70 61 76 59 88"/><path d="M63 51 C68 64 74 70 70 84"/><path d="M71 46 C78 56 84 60 80 76"/></svg>',
  dolphin: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M16 58 C14 32 34 14 58 18"/><path d="M22 62 C24 44 38 32 54 28"/><path d="M16 58 C10 62 6 66 4 72"/><path d="M50 20 L58 10 L62 24 Z"/><path d="M84 40 L96 32 M84 46 L98 50"/><path d="M58 18 C70 24 80 32 84 42 C74 42 64 40 54 34"/><circle cx="24" cy="54" r="2" fill="currentColor" stroke="none"/></svg>',
  platypus: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="56" cy="55" rx="26" ry="17"/><circle cx="24" cy="49" r="10"/><ellipse cx="8" cy="50" rx="9" ry="4.5"/><path d="M40,69 L38,79 M50,71 L48,81 M64,71 L66,81 M74,69 L78,79"/><path d="M82,48 C92,44 96,50 90,56"/></svg>',
  flamingo: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><circle cx="30" cy="16" r="6"/><path d="M25,17 L14,21 L18,25"/><circle cx="28" cy="14" r="1.3" fill="currentColor" stroke="none"/><path d="M33,21 C42,28 26,36 36,44 C40,48 46,50 48,54"/><ellipse cx="56" cy="60" rx="17" ry="13"/><path d="M50,72 L48,84 L44,84 L42,96"/><path d="M62,70 C68,72 68,78 62,80"/></svg>',
  seaCucumber: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M14 52 C14 40 22 34 50 34 C78 34 86 40 86 52 C86 64 78 70 50 70 C22 70 14 64 14 52 Z"/><path d="M28 40 L28 64 M40 37 L40 67 M52 36 L52 68 M64 37 L64 67 M76 40 L76 64"/></svg>',
  koala: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="26" r="13"/><circle cx="76" cy="26" r="13"/><circle cx="50" cy="46" r="26"/><circle cx="41" cy="42" r="2.4" fill="currentColor" stroke="none"/><circle cx="59" cy="42" r="2.4" fill="currentColor" stroke="none"/><ellipse cx="50" cy="52" rx="5" ry="3.5" fill="currentColor" stroke="none"/></svg>',
  hummingbird: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="54" cy="55" rx="13" ry="10"/><circle cx="38" cy="48" r="7"/><path d="M31,48 L8,46"/><circle cx="36" cy="46" r="1.6" fill="currentColor" stroke="none"/><path d="M56,47 C68,29 84,27 92,15"/><path d="M58,51 C72,39 86,37 94,29"/><path d="M64,61 L80,57 M64,63 L82,65 M64,59 L78,51"/></svg>',
  rabbit: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="34" cy="18" rx="8" ry="16" transform="rotate(-18 34 18)"/><ellipse cx="60" cy="16" rx="8" ry="16" transform="rotate(14 60 16)"/><circle cx="50" cy="52" r="24"/><circle cx="42" cy="48" r="2.3" fill="currentColor" stroke="none"/><circle cx="58" cy="48" r="2.3" fill="currentColor" stroke="none"/><circle cx="50" cy="58" r="2" fill="currentColor" stroke="none"/><circle cx="76" cy="70" r="7"/></svg>',
  horseshoeCrab: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M50,16 C24,16 8,30 8,44 C8,52 18,58 32,58 L68,58 C82,58 92,52 92,44 C92,30 76,16 50,16 Z"/><path d="M32,58 L22,70 M40,60 L34,72 M60,60 L66,72 M68,58 L78,70"/><path d="M50,58 L50,94"/><circle cx="38" cy="28" r="1.8" fill="currentColor" stroke="none"/><circle cx="62" cy="28" r="1.8" fill="currentColor" stroke="none"/></svg>',
  alligator: '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="46" cy="50" rx="32" ry="14"/><path d="M78,42 L98,50 L78,58 Z" fill="currentColor" stroke="none"/><path d="M6,44 L11,50 L6,56 M14,42 L19,50 L14,58"/><circle cx="18" cy="38" r="1.8" fill="currentColor" stroke="none"/><circle cx="27" cy="36" r="1.8" fill="currentColor" stroke="none"/><path d="M28,62 L26,70 M64,62 L66,70"/></svg>',
};

const QUESTIONS = [
  {
    question: "Which animal has three hearts?",
    choices: ["Octopus", "Elephant", "Shark", "Dolphin"],
    correct: 0,
    fact: "An octopus has three hearts — two pump blood to the gills, and one pumps it to the rest of the body. That main heart actually stops beating when the octopus swims, which is why they prefer crawling.",
    icon: ICONS.octopus,
  },
  {
    question: "Which animal can sleep with only half of its brain at a time?",
    choices: ["Horse", "Dolphin", "Cat", "Owl"],
    correct: 1,
    fact: "Dolphins sleep with one half of their brain at a time — and keep one eye open — so they can keep breathing and stay alert to predators while resting.",
    icon: ICONS.dolphin,
  },
  {
    question: "Which mammal lays eggs instead of giving birth to live young?",
    choices: ["Kangaroo", "Armadillo", "Platypus", "Sloth"],
    correct: 2,
    fact: "The platypus is one of only a few egg-laying mammals (monotremes), alongside the echidna. It also has no stomach — its esophagus connects straight to its intestine.",
    icon: ICONS.platypus,
  },
  {
    question: "What is a group of flamingos called?",
    choices: ["A pod", "A flamboyance", "A murder", "A parade"],
    correct: 1,
    fact: "A group of flamingos is called a ‘flamboyance’ — fitting for a bird that turns pink from the pigments in the shrimp and algae it eats.",
    icon: ICONS.flamingo,
  },
  {
    question: "Which animal can expel its internal organs to scare off predators and then regrow them?",
    choices: ["Starfish", "Jellyfish", "Octopus", "Sea cucumber"],
    correct: 3,
    fact: "Sea cucumbers can eject part of their internal organs to confuse or entangle predators, then simply regenerate the lost organs over the following weeks.",
    icon: ICONS.seaCucumber,
  },
  {
    question: "Which animal has fingerprints so similar to a human's that they could confuse a crime scene?",
    choices: ["Koala", "Chimpanzee", "Gorilla", "Panda"],
    correct: 0,
    fact: "Koalas have fingerprints virtually indistinguishable from human fingerprints, even under a microscope — an odd case of unrelated species evolving the same trait.",
    icon: ICONS.koala,
  },
  {
    question: "Which bird is the only one that can fly backwards?",
    choices: ["Sparrow", "Hummingbird", "Owl", "Eagle"],
    correct: 1,
    fact: "Hummingbirds are the only birds that can fly backwards, thanks to a unique shoulder joint that lets their wings rotate in a full figure-eight motion.",
    icon: ICONS.hummingbird,
  },
  {
    question: "What is a baby rabbit called?",
    choices: ["Joey", "Cub", "Kit", "Pup"],
    correct: 2,
    fact: "A baby rabbit is called a ‘kit’ (short for kitten). ‘Joey’ is used for kangaroos, opossums, and a few other marsupials.",
    icon: ICONS.rabbit,
  },
  {
    question: "Which of these animals has blue blood?",
    choices: ["Horseshoe crab", "Elephant", "Dog", "Human"],
    correct: 0,
    fact: "Horseshoe crab blood is blue because it uses copper-based hemocyanin instead of iron-based hemoglobin to carry oxygen. It's also so valuable for detecting bacterial contamination that a quart can sell for thousands of dollars.",
    icon: ICONS.horseshoeCrab,
  },
  {
    question: "Which of these animals never stops growing for its entire life?",
    choices: ["Human", "Dog", "Alligator", "Cat"],
    correct: 2,
    fact: "Alligators show ‘indeterminate growth’ — they keep growing slowly their whole lives, unlike mammals which stop at maturity. That's why the oldest alligators tend to be the biggest.",
    icon: ICONS.alligator,
  },
];

const TL = 20000; // ms per specimen
const MAXP = 1000;
const MINP = 200;
const PEER_PREFIX = "specimendrawer-";

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
    $("host-status").textContent = "Ready. Share the code above — naturalists can join now.";
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
// questions the moment they join, starting at Specimen 1 no
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
  $("specimen-label").textContent = `Specimen ${String(idx + 1).padStart(2, "0")} / ${QUESTIONS.length}`;
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
    icon: q.icon,
    species: q.choices[q.correct],
    guess: aIdx < 0 ? "No answer" : q.choices[aIdx],
    isCorrect: correct,
  });

  const panel = $("result-panel");
  panel.classList.add("visible");
  panel.classList.remove("is-correct", "is-wrong");
  panel.classList.add(correct ? "is-correct" : "is-wrong");
  $("result-stamp").textContent = aIdx < 0 ? "Time's Up" : (correct ? "Identified" : "Misidentified");
  $("result-icon").innerHTML = q.icon;
  $("result-correct-answer").querySelector("b").textContent = q.choices[q.correct];
  $("result-fact").textContent = q.fact;
  $("result-points").textContent = pts > 0 ? `+${pts} points` : "+0 points";
  $("player-next-btn").textContent = qi === QUESTIONS.length - 1 ? "Finish My Drawer" : "Next Specimen";

  myRawAnswers.push({ qi, a: aIdx, ms });
  if (myConn && myConn.open) myConn.send({ type: "ans", qi, a: aIdx, ms });
}

function playerAdvance() {
  qi++;
  if (qi >= QUESTIONS.length) {
    const correctCount = myAnswers.filter((a) => a.isCorrect).length;
    $("player-waiting-summary").textContent = `You identified ${correctCount} / ${QUESTIONS.length} specimens. Your score: ${myScore}.`;
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
  $("player-rank").textContent = idx >= 0 ? `${ordinal(idx + 1)} of ${total} Naturalists` : "Results";
  $("player-final-score").textContent = myScore;

  const correctCount = myAnswers.filter((a) => a.isCorrect).length;
  $("player-correct-summary").textContent = `You identified ${correctCount} / ${QUESTIONS.length} specimens correctly`;

  $("player-summary").innerHTML = myAnswers
    .map((a, i) => {
      const statusClass = a.isCorrect ? "correct" : "wrong";
      const guessLine = a.isCorrect ? "" : `<div class="summary-guess">You guessed: ${a.guess}</div>`;
      return `
        <div class="summary-row ${statusClass}">
          <div class="summary-plate">${a.icon}</div>
          <div class="summary-text">
            <div class="summary-species">${i + 1}. ${a.species}</div>
            ${guessLine}
          </div>
          <div class="summary-status ${statusClass}">${a.isCorrect ? "Identified" : "Missed"}</div>
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

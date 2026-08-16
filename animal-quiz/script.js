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

// ---- state ----
let peer = null, conn = null;
let isHost = false, myName = "", opName = "";
let qi = 0, myTotal = 0, opTotal = 0;
let answered = false, opAnswered = false;
let timerInterval = null;

function $(id) { return document.getElementById(id); }

function showScreen(id) {
  ["s-home", "s-host", "s-join", "s-game", "s-winner"].forEach((s) => {
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

function goHome() {
  if (timerInterval) clearInterval(timerInterval);
  if (conn) { try { conn.close(); } catch (e) {} }
  if (peer) { try { peer.destroy(); } catch (e) {} }
  peer = null; conn = null;
  isHost = false; myName = ""; opName = "";
  qi = 0; myTotal = 0; opTotal = 0;
  answered = false; opAnswered = false;
  showScreen("s-home");
}

// ---- HOST ----
function goHost() {
  showScreen("s-host");
  const code = genCode();
  $("code-disp").textContent = code;
  $("host-err").textContent = "";
  $("host-status").textContent = "Connecting to server…";
  $("start-btn").style.display = "none";

  peer = new Peer(PEER_PREFIX + code);
  peer.on("open", () => {
    $("host-status").textContent = "Ready. Waiting for an opponent to join…";
  });
  peer.on("connection", (c) => {
    conn = c;
    wireHost();
  });
  peer.on("error", (e) => {
    $("host-err").textContent = "Connection error (" + e.type + "). Try again.";
  });
}

function wireHost() {
  conn.on("open", () => {
    conn.send({ type: "hello" });
  });
  conn.on("data", (d) => {
    if (d.type === "name") {
      opName = d.name;
      $("host-status").textContent = opName + " has joined. Press Begin the Match!";
      $("start-btn").style.display = "block";
    }
    if (d.type === "ans") {
      opAnswered = true;
      const correct = d.a === QUESTIONS[qi].correct;
      const pts = correct ? calcPts(d.ms) : 0;
      if (correct) opTotal += pts;
      $("sc-pts2").textContent = opTotal;
      checkBoth();
    }
  });
  conn.on("close", () => {
    $("host-err").textContent = "Your opponent disconnected.";
  });
}

function startMatch() {
  myName = $("host-name").value.trim() || "Host";
  isHost = true; qi = 0; myTotal = 0; opTotal = 0;
  conn.send({ type: "start", hostName: myName, guestName: opName });
  initGameUI();
  setTimeout(() => nextQuestion(), 400);
}

// ---- GUEST ----
function doJoin() {
  const name = $("guest-name").value.trim() || "Guest";
  const code = $("code-input").value.trim().toUpperCase();
  if (code.length !== 6) {
    $("join-err").textContent = "Please enter the 6-character match code.";
    return;
  }
  myName = name; isHost = false;
  $("join-status").textContent = "Connecting…";
  $("join-err").textContent = "";
  $("join-btn").disabled = true;

  peer = new Peer();
  peer.on("open", () => {
    $("join-status").textContent = "Finding host…";
    conn = peer.connect(PEER_PREFIX + code, { reliable: true });
    wireGuest();
  });
  peer.on("error", () => {
    $("join-err").textContent = "Couldn't connect. Check the code and try again.";
    $("join-btn").disabled = false;
  });
}

function wireGuest() {
  conn.on("open", () => {
    $("join-status").textContent = "Connected. Waiting for the host to begin…";
  });
  conn.on("data", (d) => {
    if (d.type === "hello") {
      conn.send({ type: "name", name: myName });
    }
    if (d.type === "start") {
      opName = d.hostName;
      qi = 0; myTotal = 0; opTotal = 0;
      initGameUI();
    }
    if (d.type === "question") {
      qi = d.qi;
      answered = false; opAnswered = false;
      showQuestion(d.qi, d.deadline);
    }
    if (d.type === "opAns") {
      opAnswered = true;
      const correct = d.a === QUESTIONS[qi].correct;
      const pts = correct ? calcPts(d.ms) : 0;
      if (correct) opTotal += pts;
      $("sc-pts2").textContent = opTotal;
      checkBoth();
    }
    if (d.type === "over") {
      showWinner(d.hTotal, d.gTotal, d.hName, d.gName);
    }
  });
  conn.on("close", () => {
    $("join-err").textContent = "The host disconnected.";
  });
}

// ---- GAME ----
function calcPts(ms) {
  return Math.round(MINP + (MAXP - MINP) * Math.max(0, 1 - ms / TL));
}

function initGameUI() {
  showScreen("s-game");
  $("sc-name1").textContent = myName;
  $("sc-name2").textContent = opName;
  $("sc-pts1").textContent = "0";
  $("sc-pts2").textContent = "0";
  $("result-panel").classList.remove("visible");
}

function nextQuestion() {
  answered = false; opAnswered = false;
  $("result-panel").classList.remove("visible");
  const dl = Date.now() + TL + 300;
  conn.send({ type: "question", qi: qi, deadline: dl });
  showQuestion(qi, dl);
}

function showQuestion(idx, dl) {
  if (timerInterval) clearInterval(timerInterval);
  answered = false;
  $("result-panel").classList.remove("visible");

  const q = QUESTIONS[idx];
  $("specimen-label").textContent = `Specimen ${String(idx + 1).padStart(2, "0")} / ${QUESTIONS.length}`;
  $("rail-fill").style.width = `${(idx / QUESTIONS.length) * 100}%`;
  $("question-text").textContent = q.question;

  const answerBtns = Array.from(document.querySelectorAll(".answer-btn"));
  answerBtns.forEach((btn, i) => {
    btn.querySelector(".answer-text").textContent = q.choices[i];
    btn.classList.remove("correct", "wrong", "dim");
    btn.disabled = false;
    btn.onclick = () => submitAnswer(i, dl);
  });

  function tick() {
    const rem = Math.max(0, dl - Date.now());
    const pct = (rem / TL) * 100;
    $("light-fill").style.width = pct + "%";
    $("light-fill").style.backgroundColor = rem <= 5000 ? "var(--wrong)" : "";
    $("timer-label").textContent = Math.ceil(rem / 1000) + "s";
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

  const answerBtns = Array.from(document.querySelectorAll(".answer-btn"));
  answerBtns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add("correct");
    else if (i === aIdx) btn.classList.add("wrong");
    else btn.classList.add("dim");
  });

  if (correct) myTotal += pts;
  $("sc-pts1").textContent = myTotal;

  const panel = $("result-panel");
  panel.classList.add("visible");
  panel.classList.remove("is-correct", "is-wrong");
  panel.classList.add(correct ? "is-correct" : "is-wrong");
  $("result-stamp").textContent = aIdx < 0 ? "Time's Up" : (correct ? "Identified" : "Misidentified");
  $("result-icon").innerHTML = q.icon;
  $("result-correct-answer").querySelector("b").textContent = q.choices[q.correct];
  $("result-fact").textContent = q.fact;
  $("result-points").textContent = pts > 0 ? `+${pts} points` : "+0 points";
  $("wait-msg").style.display = opAnswered ? "none" : "block";

  if (isHost) {
    conn.send({ type: "opAns", a: aIdx, ms });
  } else {
    conn.send({ type: "ans", a: aIdx, ms });
  }

  checkBoth();
}

function checkBoth() {
  if (!answered || !opAnswered) return;
  $("wait-msg").style.display = "none";

  if (isHost) {
    setTimeout(() => {
      qi++;
      if (qi >= QUESTIONS.length) {
        conn.send({ type: "over", hTotal: myTotal, gTotal: opTotal, hName: myName, gName: opName });
        showWinner(myTotal, opTotal, myName, opName);
      } else {
        nextQuestion();
      }
    }, 3500);
  }
}

function showWinner(hPts, gPts, hName, gName) {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
  showScreen("s-winner");

  const stamp = $("winner-stamp");
  let text;
  if (hPts > gPts) text = `${hName} Wins`;
  else if (gPts > hPts) text = `${gName} Wins`;
  else text = "It's a Tie";
  stamp.textContent = text;

  const iAmHostRow = { name: hName, pts: hPts, mine: isHost };
  const otherRow = { name: gName, pts: gPts, mine: !isHost };
  const rows = [iAmHostRow, otherRow];
  const topScore = Math.max(hPts, gPts);

  $("final-scores").innerHTML = rows
    .map((r) => `
      <div class="final-row ${r.pts === topScore ? "winner" : ""}">
        <span class="final-name">${r.name}${r.mine ? " (You)" : ""}</span>
        <span class="final-pts">${r.pts} pts</span>
      </div>
    `)
    .join("");
}

// ---- wiring ----
$("btn-host").addEventListener("click", goHost);
$("btn-join").addEventListener("click", () => showScreen("s-join"));
$("start-btn").addEventListener("click", startMatch);
$("join-btn").addEventListener("click", doJoin);
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

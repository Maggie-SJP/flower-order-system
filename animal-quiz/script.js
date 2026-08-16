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

const TIME_LIMIT = 15;
const MAX_POINTS = 1000;
const MIN_POINTS = 300;

const state = { index: 0, score: 0, correctCount: 0, timer: null, timeLeft: TIME_LIMIT, locked: false };

const screens = {
  start: document.getElementById("start-screen"),
  quiz: document.getElementById("quiz-screen"),
  feedback: document.getElementById("feedback-screen"),
  results: document.getElementById("results-screen"),
};

const el = {
  startBtn: document.getElementById("start-btn"),
  nextBtn: document.getElementById("next-btn"),
  restartBtn: document.getElementById("restart-btn"),
  railFill: document.getElementById("rail-fill"),
  questionCount: document.getElementById("question-count"),
  scoreDisplay: document.getElementById("score-display"),
  lightFill: document.getElementById("light-fill"),
  lightReadout: document.getElementById("light-readout"),
  questionText: document.getElementById("question-text"),
  questionIcon: document.getElementById("question-icon"),
  answerBtns: Array.from(document.querySelectorAll(".answer-btn")),
  feedbackCard: document.getElementById("feedback-card"),
  feedbackIcon: document.getElementById("feedback-icon"),
  feedbackStamp: document.getElementById("feedback-stamp"),
  feedbackCorrectAnswer: document.getElementById("feedback-correct-answer").querySelector("b"),
  feedbackFact: document.getElementById("feedback-fact"),
  feedbackPoints: document.getElementById("feedback-points"),
  resultsRank: document.getElementById("results-rank"),
  finalScore: document.getElementById("final-score"),
  resultsCorrect: document.getElementById("results-correct"),
};

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
}

function pad(n, len) { return String(n).padStart(len, "0"); }

function startQuiz() {
  state.index = 0;
  state.score = 0;
  state.correctCount = 0;
  showScreen("quiz");
  loadQuestion();
}

function loadQuestion() {
  state.locked = false;
  state.timeLeft = TIME_LIMIT;

  const q = QUESTIONS[state.index];
  el.questionText.textContent = q.question;
  el.questionIcon.innerHTML = q.icon;
  el.questionCount.textContent = `Specimen ${pad(state.index + 1, 2)} / ${QUESTIONS.length}`;
  el.scoreDisplay.textContent = `Score ${pad(state.score, 4)}`;
  el.railFill.style.width = `${(state.index / QUESTIONS.length) * 100}%`;

  el.answerBtns.forEach((btn, i) => {
    btn.querySelector(".answer-text").textContent = q.choices[i];
    btn.classList.remove("correct", "wrong", "dim");
    btn.disabled = false;
  });

  el.lightFill.style.transition = "none";
  el.lightFill.style.width = "100%";
  el.lightFill.style.backgroundColor = "";
  void el.lightFill.offsetWidth;
  el.lightFill.style.transition = "width 1s linear, background-color 0.4s ease";
  el.lightReadout.textContent = `${state.timeLeft}s`;

  clearInterval(state.timer);
  state.timer = setInterval(tick, 1000);
}

function tick() {
  state.timeLeft -= 1;
  const pct = Math.max(0, (state.timeLeft / TIME_LIMIT) * 100);
  el.lightFill.style.width = `${pct}%`;
  el.lightReadout.textContent = `${Math.max(0, state.timeLeft)}s`;
  if (state.timeLeft <= 5) {
    el.lightFill.style.backgroundColor = "var(--wrong)";
  }
  if (state.timeLeft <= 0) {
    clearInterval(state.timer);
    if (!state.locked) handleAnswer(null);
  }
}

function handleAnswer(selectedIndex) {
  if (state.locked) return;
  state.locked = true;
  clearInterval(state.timer);

  const q = QUESTIONS[state.index];
  const isCorrect = selectedIndex === q.correct;
  let pointsEarned = 0;

  el.answerBtns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add("correct");
    else if (i === selectedIndex) btn.classList.add("wrong");
    else btn.classList.add("dim");
  });

  if (isCorrect) {
    const speedRatio = Math.max(0, state.timeLeft) / TIME_LIMIT;
    pointsEarned = Math.round(MIN_POINTS + (MAX_POINTS - MIN_POINTS) * speedRatio);
    state.score += pointsEarned;
    state.correctCount += 1;
  }

  setTimeout(() => showFeedback(isCorrect, pointsEarned, q), 900);
}

function showFeedback(isCorrect, pointsEarned, q) {
  el.feedbackCard.classList.remove("is-correct", "is-wrong");
  el.feedbackCard.classList.add(isCorrect ? "is-correct" : "is-wrong");
  el.feedbackStamp.textContent = isCorrect ? "Identified" : "Misidentified";
  el.feedbackIcon.innerHTML = q.icon;
  el.feedbackCorrectAnswer.textContent = q.choices[q.correct];
  el.feedbackFact.textContent = q.fact;
  el.feedbackPoints.textContent = isCorrect ? `+${pointsEarned} points` : "+0 points";
  el.scoreDisplay.textContent = `Score ${pad(state.score, 4)}`;
  showScreen("feedback");
}

function nextQuestion() {
  state.index += 1;
  if (state.index >= QUESTIONS.length) {
    showResults();
  } else {
    showScreen("quiz");
    loadQuestion();
  }
}

function getRank(correctCount) {
  if (correctCount === QUESTIONS.length) return "Museum Curator";
  if (correctCount >= 8) return "Master Naturalist";
  if (correctCount >= 6) return "Field Researcher";
  if (correctCount >= 4) return "Junior Naturalist";
  return "First-Time Visitor";
}

function showResults() {
  el.railFill.style.width = "100%";
  el.resultsRank.textContent = getRank(state.correctCount);
  el.finalScore.textContent = pad(state.score, 4);
  el.resultsCorrect.textContent = `You identified ${state.correctCount} / ${QUESTIONS.length} specimens correctly`;
  showScreen("results");
}

el.startBtn.addEventListener("click", startQuiz);
el.nextBtn.addEventListener("click", nextQuestion);
el.restartBtn.addEventListener("click", startQuiz);
el.answerBtns.forEach((btn) => {
  btn.addEventListener("click", () => handleAnswer(Number(btn.dataset.index)));
});

const QUESTIONS = [
  {
    question: "Which animal has three hearts?",
    choices: ["Octopus", "Elephant", "Shark", "Dolphin"],
    correct: 0,
    fact: "An octopus has three hearts — two pump blood to the gills, and one pumps it to the rest of the body. That main heart actually stops beating when the octopus swims, which is why they prefer crawling!",
  },
  {
    question: "Which animal can sleep with only half of its brain at a time?",
    choices: ["Horse", "Dolphin", "Cat", "Owl"],
    correct: 1,
    fact: "Dolphins sleep with one half of their brain at a time — and keep one eye open — so they can keep breathing and stay alert to predators while resting.",
  },
  {
    question: "Which mammal lays eggs instead of giving birth to live young?",
    choices: ["Kangaroo", "Armadillo", "Platypus", "Sloth"],
    correct: 2,
    fact: "The platypus is one of only a few egg-laying mammals (monotremes) in the world, alongside the echidna. It also has no stomach — its esophagus connects straight to its intestine!",
  },
  {
    question: "What is a group of flamingos called?",
    choices: ["A pod", "A flamboyance", "A murder", "A parade"],
    correct: 1,
    fact: "A group of flamingos is called a 'flamboyance' — fitting for a bird that turns pink from the pigments in the shrimp and algae it eats.",
  },
  {
    question: "Which animal can expel its internal organs to scare off predators and then regrow them?",
    choices: ["Starfish", "Jellyfish", "Octopus", "Sea cucumber"],
    correct: 3,
    fact: "Sea cucumbers can eject part of their internal organs through their anus to confuse or entangle predators, then simply regenerate the lost organs over the following weeks.",
  },
  {
    question: "Which animal has fingerprints so similar to a human's that they could confuse a crime scene?",
    choices: ["Koala", "Chimpanzee", "Gorilla", "Panda"],
    correct: 0,
    fact: "Koalas have fingerprints that are virtually indistinguishable from human fingerprints, even under a microscope — an odd case of unrelated species evolving the same trait.",
  },
  {
    question: "Which bird is the only one that can fly backwards?",
    choices: ["Sparrow", "Hummingbird", "Owl", "Eagle"],
    correct: 1,
    fact: "Hummingbirds are the only birds that can fly backwards, thanks to a unique shoulder joint that lets their wings rotate in a full figure-eight motion.",
  },
  {
    question: "What is a baby rabbit called?",
    choices: ["Joey", "Cub", "Kit", "Pup"],
    correct: 2,
    fact: "A baby rabbit is called a 'kit' (short for kitten). 'Joey' is used for kangaroos, opossums, and a few other marsupials.",
  },
  {
    question: "Which of these animals has blue blood?",
    choices: ["Horseshoe crab", "Elephant", "Dog", "Human"],
    correct: 0,
    fact: "Horseshoe crab blood is blue because it uses copper-based hemocyanin instead of iron-based hemoglobin to carry oxygen. Their blood is also so valuable for detecting bacterial contamination that a quart can sell for thousands of dollars.",
  },
  {
    question: "Which of these animals never stops growing for its entire life?",
    choices: ["Human", "Dog", "Alligator", "Cat"],
    correct: 2,
    fact: "Alligators show 'indeterminate growth' — they keep growing slowly their whole lives, unlike mammals which stop at maturity. That's why the oldest alligators tend to be the biggest.",
  },
];

const TIME_LIMIT = 15; // seconds per question
const MAX_POINTS = 1000;
const MIN_POINTS = 300;

const state = {
  index: 0,
  score: 0,
  correctCount: 0,
  timer: null,
  timeLeft: TIME_LIMIT,
  locked: false,
};

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
  progressBar: document.getElementById("progress-bar"),
  questionCount: document.getElementById("question-count"),
  scoreDisplay: document.getElementById("score-display"),
  timerBar: document.getElementById("timer-bar"),
  questionText: document.getElementById("question-text"),
  answersGrid: document.getElementById("answers-grid"),
  answerBtns: Array.from(document.querySelectorAll(".answer-btn")),
  feedbackCard: document.getElementById("feedback-card"),
  feedbackIcon: document.getElementById("feedback-icon"),
  feedbackTitle: document.getElementById("feedback-title"),
  feedbackCorrectAnswer: document.getElementById("feedback-correct-answer"),
  feedbackFact: document.getElementById("feedback-fact"),
  feedbackPoints: document.getElementById("feedback-points"),
  resultsEmoji: document.getElementById("results-emoji"),
  resultsRank: document.getElementById("results-rank"),
  finalScore: document.getElementById("final-score"),
  resultsCorrect: document.getElementById("results-correct"),
};

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
}

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
  el.questionCount.textContent = `Question ${state.index + 1} / ${QUESTIONS.length}`;
  el.scoreDisplay.textContent = `Score: ${state.score}`;
  el.progressBar.style.width = `${(state.index / QUESTIONS.length) * 100}%`;

  el.answerBtns.forEach((btn, i) => {
    btn.querySelector(".answer-text").textContent = q.choices[i];
    btn.classList.remove("correct", "wrong", "dim");
    btn.disabled = false;
  });

  el.timerBar.style.transition = "none";
  el.timerBar.style.width = "100%";
  el.timerBar.style.backgroundColor = "#ffffff";
  // force reflow so the transition re-applies cleanly next tick
  void el.timerBar.offsetWidth;
  el.timerBar.style.transition = "width 1s linear, background-color 0.3s ease";

  clearInterval(state.timer);
  state.timer = setInterval(tick, 1000);
}

function tick() {
  state.timeLeft -= 1;
  const pct = Math.max(0, (state.timeLeft / TIME_LIMIT) * 100);
  el.timerBar.style.width = `${pct}%`;
  if (state.timeLeft <= 5) {
    el.timerBar.style.backgroundColor = "#e21b3c";
  }
  if (state.timeLeft <= 0) {
    clearInterval(state.timer);
    if (!state.locked) {
      handleAnswer(null);
    }
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
    if (i === q.correct) {
      btn.classList.add("correct");
    } else if (i === selectedIndex) {
      btn.classList.add("wrong");
    } else {
      btn.classList.add("dim");
    }
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
  el.feedbackIcon.textContent = isCorrect ? "✔" : "✘";
  el.feedbackTitle.textContent = isCorrect ? "Correct!" : "Not quite!";
  el.feedbackCorrectAnswer.textContent = `Correct answer: ${q.choices[q.correct]}`;
  el.feedbackFact.textContent = q.fact;
  el.feedbackPoints.textContent = isCorrect ? `+${pointsEarned} points` : "+0 points";
  el.scoreDisplay.textContent = `Score: ${state.score}`;
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
  if (correctCount === QUESTIONS.length) return { emoji: "🏆", rank: "Wildlife Genius!" };
  if (correctCount >= 8) return { emoji: "🦉", rank: "Wildlife Expert" };
  if (correctCount >= 6) return { emoji: "🦊", rank: "Nature Enthusiast" };
  if (correctCount >= 4) return { emoji: "🐾", rank: "Curious Explorer" };
  return { emoji: "🐣", rank: "Just Getting Started" };
}

function showResults() {
  el.progressBar.style.width = "100%";
  const { emoji, rank } = getRank(state.correctCount);
  el.resultsEmoji.textContent = emoji;
  el.resultsRank.textContent = rank;
  el.finalScore.textContent = state.score;
  el.resultsCorrect.textContent = `You got ${state.correctCount} / ${QUESTIONS.length} correct`;
  showScreen("results");
}

el.startBtn.addEventListener("click", startQuiz);
el.nextBtn.addEventListener("click", nextQuestion);
el.restartBtn.addEventListener("click", startQuiz);
el.answerBtns.forEach((btn) => {
  btn.addEventListener("click", () => handleAnswer(Number(btn.dataset.index)));
});

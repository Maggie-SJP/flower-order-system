document.addEventListener("DOMContentLoaded", () => {
  const QUESTIONS = [
    {
      q: "What's the minimum age to sit the QLD written road rules test in person?",
      options: ["15", "16", "17", "18"],
      correct: 1,
    },
    {
      q: "From what age can you enrol in PrepL, the online interactive learning program?",
      options: ["15 years exactly", "15 years 6 months", "15 years 11 months", "16 years exactly"],
      correct: 2,
    },
    {
      q: "Who is allowed to supervise a Learner driver?",
      options: [
        "Anyone with a P2 licence",
        "Anyone with an open licence held for at least a year",
        "A P1 driver over 21",
        "Only a parent",
      ],
      correct: 1,
    },
    {
      q: "If you're under 25, how many hours of supervised driving must you log before getting your P1?",
      options: ["50 hours", "75 hours", "100 hours", "120 hours"],
      correct: 2,
    },
    {
      q: "Of your logged hours, how many must be completed at night?",
      options: ["5 hours", "10 hours", "15 hours", "20 hours"],
      correct: 1,
    },
    {
      q: "Logging 10 hours with an accredited professional driver trainer counts as how many logbook hours?",
      options: ["10 hours", "20 hours", "30 hours", "50 hours"],
      correct: 2,
    },
    {
      q: "What blood alcohol limit must your supervisor stay under?",
      options: ["0.00", "0.02", "0.05", "0.08"],
      correct: 2,
    },
    {
      q: "What's the minimum age to get a P1 (Red P) licence?",
      options: ["16", "17", "18", "19"],
      correct: 1,
    },
    {
      q: "Before getting your P1, how long must you have held your Learner licence?",
      options: ["6 months", "9 months", "12 months", "18 months"],
      correct: 2,
    },
    {
      q: "What colour P-plate do you display on your first provisional licence?",
      options: ["Green", "Red", "Yellow", "Blue"],
      correct: 1,
    },
    {
      q: "What must you pass to move from P1 to P2?",
      options: [
        "Another written road rules test",
        "The Hazard Perception Test",
        "A defensive driving course",
        "A medical exam",
      ],
      correct: 1,
    },
    {
      q: "How long must you hold your P1 before upgrading to P2?",
      options: ["6 months", "12 months", "18 months", "24 months"],
      correct: 1,
    },
    {
      q: "If you graduate from your Learner licence at 25 or older, which stage do you go to first?",
      options: ["P1 (Red P)", "P2 (Green P)", "Open licence", "You repeat the Learner test"],
      correct: 1,
    },
    {
      q: "What's the minimum age to hold an Open licence?",
      options: ["18", "19", "20", "21"],
      correct: 2,
    },
    {
      q: "How do you apply for your Open licence once eligible?",
      options: [
        "It's issued automatically",
        "By post only",
        "Online or in person at a TMR Customer Service Centre",
        "Only at your original test location",
      ],
      correct: 2,
    },
  ];

  const container = document.getElementById("quiz-questions");
  const progressFill = document.getElementById("quiz-progress-fill");
  const submitBtn = document.getElementById("quiz-submit");
  const retakeBtn = document.getElementById("quiz-retake");
  const warning = document.getElementById("quiz-warning");
  const scorePanel = document.getElementById("quiz-score-panel");

  if (!container) return;

  const answers = new Array(QUESTIONS.length).fill(null);

  function updateProgress() {
    const answered = answers.filter((a) => a !== null).length;
    progressFill.style.width = `${(answered / QUESTIONS.length) * 100}%`;
  }

  QUESTIONS.forEach((item, qi) => {
    const card = document.createElement("div");
    card.className = "quiz-question";

    const num = document.createElement("div");
    num.className = "q-num";
    num.textContent = `Question ${qi + 1} of ${QUESTIONS.length}`;
    card.appendChild(num);

    const heading = document.createElement("h4");
    heading.textContent = item.q;
    card.appendChild(heading);

    const optionsWrap = document.createElement("div");
    optionsWrap.className = "quiz-options";

    item.options.forEach((optText, oi) => {
      const label = document.createElement("label");
      label.className = "option-label";
      label.dataset.qi = qi;
      label.dataset.oi = oi;

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${qi}`;
      input.value = oi;

      input.addEventListener("change", () => {
        answers[qi] = oi;
        optionsWrap.querySelectorAll(".option-label").forEach((el) => el.classList.remove("selected"));
        label.classList.add("selected");
        updateProgress();
      });

      label.appendChild(input);
      label.appendChild(document.createTextNode(optText));
      optionsWrap.appendChild(label);
    });

    card.appendChild(optionsWrap);
    container.appendChild(card);
  });

  function scoreMessage(score, total) {
    const pct = score / total;
    if (pct >= 13 / 15) {
      return {
        title: "Licence Legend!",
        sub: "You clearly know the graduated licensing rules inside out.",
      };
    }
    if (pct >= 9 / 15) {
      return {
        title: "Solid Effort!",
        sub: "A quick re-read of the stage pages will fill in the gaps.",
      };
    }
    if (pct >= 5 / 15) {
      return {
        title: "Getting There!",
        sub: "Head back through the Learner, P1, P2 and Open pages and try again.",
      };
    }
    return {
      title: "Back to Basics!",
      sub: "Start from the Learner page and work through each stage before retaking the quiz.",
    };
  }

  submitBtn.addEventListener("click", () => {
    const firstUnanswered = answers.findIndex((a) => a === null);
    if (firstUnanswered !== -1) {
      warning.classList.add("show");
      container.children[firstUnanswered].scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    warning.classList.remove("show");

    let score = 0;
    QUESTIONS.forEach((item, qi) => {
      const isCorrect = answers[qi] === item.correct;
      if (isCorrect) score += 1;

      const labels = container.querySelectorAll(`label[data-qi="${qi}"]`);
      labels.forEach((label) => {
        const oi = parseInt(label.dataset.oi, 10);
        const input = label.querySelector("input");
        input.disabled = true;
        label.classList.add("disabled");
        label.classList.remove("selected");
        if (oi === item.correct) label.classList.add("correct");
        else if (oi === answers[qi]) label.classList.add("incorrect");
      });
    });

    submitBtn.style.display = "none";
    retakeBtn.style.display = "inline-flex";

    const msg = scoreMessage(score, QUESTIONS.length);
    document.getElementById("score-big").textContent = `${score} / ${QUESTIONS.length}`;
    document.getElementById("score-message").textContent = msg.title;
    document.getElementById("score-sub").textContent = msg.sub;
    scorePanel.classList.add("show");
    scorePanel.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  retakeBtn.addEventListener("click", () => {
    window.location.reload();
  });

  updateProgress();
});

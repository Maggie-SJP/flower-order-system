document.addEventListener("DOMContentLoaded", () => {
  const daySelect = document.getElementById("birth-day");
  const monthSelect = document.getElementById("birth-month");
  const yearSelect = document.getElementById("birth-year");
  const form = document.getElementById("checker-form");
  const errorText = document.getElementById("checker-error");
  const resultPanel = document.getElementById("result-panel");

  if (!form) return;

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const today = new Date();
  const currentYear = today.getFullYear();

  months.forEach((name, i) => {
    const opt = document.createElement("option");
    opt.value = i + 1;
    opt.textContent = name;
    monthSelect.appendChild(opt);
  });

  for (let d = 1; d <= 31; d++) {
    const opt = document.createElement("option");
    opt.value = d;
    opt.textContent = d;
    daySelect.appendChild(opt);
  }

  for (let y = currentYear; y >= currentYear - 100; y--) {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y;
    yearSelect.appendChild(opt);
  }

  const STAGES = {
    tooYoung: {
      color: "var(--accent-home)",
      badge: "?",
      title: "Not Yet — But Get Ready!",
      subtitle: "You're too young to start just yet, but here's how to prepare for your Learner licence.",
      body: "From 15 years and 11 months old, you can enrol in PrepL, Queensland's online interactive learning program — or wait until you're 16 to sit the in-person written road rules test. In the meantime, start reading up on the road rules, and think about who could supervise you once you're ready: they'll need to hold an open driver licence.",
      linkHref: "learner.html",
      linkLabel: "Preview the Learner stage",
    },
    learner: {
      color: "var(--accent-learner)",
      badge: "L",
      title: "Get Ready!",
      subtitle: "You're at the right age to start your Learner licence journey.",
      body: "Prove your identity and pass the written road rules test (or complete PrepL online), then start logging your 100 hours of supervised driving with a supervisor who holds an open licence.",
      linkHref: "learner.html",
      linkLabel: "See full Learner requirements",
    },
    p1: {
      color: "var(--accent-p1)",
      badge: "P1",
      title: "Time to Hit the Road!",
      subtitle: "At your age, the standard next step is a P1 (Red P) licence.",
      body: "Once you've held your Learner licence for 12 months and finished your 100 logbook hours, you can sit the practical driving test and move up to a P1 (Red P) licence. Good to know: if you're still on your Learner licence when you turn 25, QLD lets you skip P1 entirely and jump straight to P2. From age 20, you'll also meet the minimum age for an Open licence, once your provisional tenure is complete.",
      linkHref: "p1.html",
      linkLabel: "See full P1 requirements",
    },
    p2Skip: {
      color: "var(--accent-p2)",
      badge: "P2",
      title: "You Skip P1!",
      subtitle: "At 25 or older, Queensland lets you jump straight from Learner to P2.",
      body: "If this is your first time getting a provisional licence, you skip the P1 (Red P) stage entirely. Once you've held your Learner licence for 12 months and passed the practical driving test, you go straight to a P2 (Green P) licence. You've also already passed the minimum age (20) for an Open licence — once your provisional tenure is done, you can apply for that too.",
      linkHref: "p2.html",
      linkLabel: "See full P2 requirements",
    },
  };

  function getStageKey(totalMonths) {
    if (totalMonths < 191) return "tooYoung";
    if (totalMonths < 204) return "learner";
    if (totalMonths < 300) return "p1";
    return "p2Skip";
  }

  function preciseAge(birth, now) {
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }
    return { years, months, days };
  }

  function showError(message) {
    errorText.textContent = message;
    errorText.classList.add("show");
    resultPanel.classList.remove("show");
  }

  function clearError() {
    errorText.classList.remove("show");
    errorText.textContent = "";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearError();

    const day = parseInt(daySelect.value, 10);
    const month = parseInt(monthSelect.value, 10);
    const year = parseInt(yearSelect.value, 10);

    if (!day || !month || !year) {
      showError("Please choose a day, month and year.");
      return;
    }

    const birth = new Date(year, month - 1, day);
    if (birth.getMonth() !== month - 1 || birth.getDate() !== day) {
      showError("That date doesn't seem to exist — check your day and month.");
      return;
    }
    if (birth > today) {
      showError("That birth date is in the future — double check your entries.");
      return;
    }

    const age = preciseAge(birth, today);
    const totalMonths = age.years * 12 + age.months;
    const stageKey = getStageKey(totalMonths);
    const stage = STAGES[stageKey];

    resultPanel.style.setProperty("--result-color", stage.color);
    document.getElementById("result-badge").textContent = stage.badge;
    document.getElementById("result-title").textContent = stage.title;
    document.getElementById("result-subtitle").textContent = stage.subtitle;
    document.getElementById("result-age").textContent =
      `You are ${age.years} years and ${age.months} month${age.months === 1 ? "" : "s"} old.`;
    document.getElementById("result-body").textContent = stage.body;
    const link = document.getElementById("result-link");
    link.href = stage.linkHref;
    link.textContent = stage.linkLabel + " →";

    resultPanel.classList.add("show");
    resultPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});

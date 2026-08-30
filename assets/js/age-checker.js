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
      title: "Not Yet!",
      subtitle: "You're too young to start your driving journey just yet.",
      body: "Hang tight — you can enrol in PrepL, the online road rules program, from 15 years and 11 months old, and sit the in-person written test from 16.",
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
      subtitle: "At your age, you could be eligible for your P1 (Red P) licence.",
      body: "Once you've held your Learner licence for 12 months and finished your 100 logbook hours, you can sit your practical driving test and move up to a P1 (Red P) licence.",
      linkHref: "p1.html",
      linkLabel: "See full P1 requirements",
    },
    p2: {
      color: "var(--accent-p2)",
      badge: "P2",
      title: "Nearly There!",
      subtitle: "You're likely at the P2 (Green P) stage of your journey.",
      body: "After holding your P1 for 12 months and passing the Hazard Perception Test, you'll move up to a P2 (Green P) licence until you reach Open licence age.",
      linkHref: "p2.html",
      linkLabel: "See full P2 requirements",
    },
    open: {
      color: "var(--accent-open)",
      badge: "Open",
      title: "You're All Set!",
      subtitle: "At your age, you could already be eligible for a full Open licence.",
      body: "Once you've completed the required time on your provisional licence, you can apply online or in person at a Department of Transport and Main Roads Customer Service Centre.",
      linkHref: "open.html",
      linkLabel: "See full Open licence details",
    },
  };

  function getStageKey(totalMonths) {
    if (totalMonths < 191) return "tooYoung";
    if (totalMonths < 204) return "learner";
    if (totalMonths < 216) return "p1";
    if (totalMonths < 240) return "p2";
    return "open";
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

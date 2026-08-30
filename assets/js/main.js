document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const toggle = document.querySelector(".nav-toggle");
  const scrim = document.querySelector(".scrim");

  function closeNav() {
    sidebar.classList.remove("open");
    scrim.classList.remove("open");
  }

  if (toggle && sidebar && scrim) {
    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      scrim.classList.toggle("open");
    });
    scrim.addEventListener("click", closeNav);
    document.querySelectorAll(".sidebar .nav-link").forEach((link) => {
      link.addEventListener("click", closeNav);
    });
  }
});

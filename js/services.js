document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile navigation for this page. If main.js already handles this toggle,
  // remove this block to avoid registering a second click handler.
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-navigation");
  if (toggle && nav && !toggle.dataset.servicesNavReady) {
    toggle.dataset.servicesNavReady = "true";
    toggle.addEventListener("click", function () {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      nav.classList.toggle("is-open", !isOpen);
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation");
        nav.classList.remove("is-open");
      });
    });
  }
});

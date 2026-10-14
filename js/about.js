/* About page interactions. Shared navigation may already be handled by main.js. */
document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("current-year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-navigation");

  if (toggle && nav && !toggle.dataset.aboutNavReady) {
    toggle.dataset.aboutNavReady = "true";

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

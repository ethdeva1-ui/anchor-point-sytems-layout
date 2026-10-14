document.addEventListener("DOMContentLoaded", function () {

      const menuToggle = document.querySelector(".menu-toggle");

      const mainNav = document.querySelector(".main-nav");

      // Mobile navigation

      if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

          const isOpen = mainNav.classList.toggle("is-open");

          menuToggle.setAttribute("aria-expanded", String(isOpen));

          menuToggle.setAttribute(

            "aria-label",

            isOpen ? "Close navigation" : "Open navigation"

          );

          menuToggle.querySelector("span").textContent =

            isOpen ? "×" : "☰";

        });

        // Close the mobile menu after selecting a navigation link

        mainNav.querySelectorAll("a").forEach(function (link) {

          link.addEventListener("click", function () {

            mainNav.classList.remove("is-open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute("aria-label", "Open navigation");

            menuToggle.querySelector("span").textContent = "☰";

          });

        });

      }

      // Dynamic copyright year

      const yearElement = document.getElementById("current-year");

      if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

      }

    });
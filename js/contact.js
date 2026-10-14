document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");

  if (form && feedback) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      feedback.textContent = "The form layout is ready, but it still needs to be connected to a form service or backend before messages can be delivered.";
    });
  }
});

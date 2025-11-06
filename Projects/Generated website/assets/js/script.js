// script.js

// Basic form validation (you can expand this with backend)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        e.preventDefault();
      }
    });
  }
});

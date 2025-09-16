// =============================
// FORM VALIDATION
// =============================
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting automatically

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = document.getElementById("formMessage");

  // Custom validation rules
  if (username.length < 3) {
    message.textContent = "Username must be at least 3 characters long.";
    message.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    message.textContent = "Please enter a valid email.";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters.";
    message.style.color = "red";
    return;
  }

  // If all validation passes
  message.textContent = "Form submitted successfully!";
  message.style.color = "green";
});

// =============================
// INTERACTIVE FEATURE 1: Counter
// =============================
let count = 0;
document.getElementById("counterBtn").addEventListener("click", function() {
  count++;
  document.getElementById("count").textContent = count;
});

// =============================
// INTERACTIVE FEATURE 2: Random Background Color
// =============================
document.getElementById("colorBtn").addEventListener("click", function() {
  let colors = ["#f28b82", "#fbbc04", "#34a853", "#4285f4", "#9c27b0"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});


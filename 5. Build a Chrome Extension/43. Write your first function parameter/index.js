const welcomeEl = document.getElementById("welcome-el");

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greet) {
  welcomeEl.textContent = greet + ", Per Harald Borgen 👋";
}

greetUser("Good morning");

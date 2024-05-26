const container = document.getElementById("container");

container.innerHTML = "<button onclick= 'clicked()' >Buy!</button>";

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

function clicked() {
  container.innerHTML += "<p>Thank you for buying!</p>";
}

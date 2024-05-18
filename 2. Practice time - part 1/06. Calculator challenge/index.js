let num1 = 8;
let num2 = 189;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

sumEl = document.getElementById("sum-el");

function add() {
  final = num1 + num2;
  sumEl.textContent = "Sum:" + final;
}
function sub() {
  final = num1 - num2;
  sumEl.textContent = "Sum:" + final;
}
function divide() {
  final = num1 / num2;
  sumEl.textContent = "Sum:" + final;
}
function mul() {
  final = num1 * num2;
  sumEl.textContent = "Sum:" + final;
}

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

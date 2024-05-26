// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

function saveLead() {
  console.log("Button clicked!");
}

let saveInput = document.getElementById("input-btn");

saveInput.addEventListener("click", saveLead());

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el");
let count = 0;

let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  let countStr = " " + count + " - ";
  // 3. Render the variable in the saveEl using innerText
  // NB: Make sure to not delete the existing content of the paragraph
  saveEl.innerText += countStr;
  countEl.innerText = 0;
}

let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array

function chance() {
  let we_get = Math.floor(Math.random() * 3);
  return hands[we_get];
}

console.log(chance());

// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];

let container = document.getElementById("container");

function renderImages(box) {
  let code = "";
  for (let i = 0; i < imgs.length; i += 1) {
    code += `
        
        <img class="team-img" src="${imgs[i]}" alt="team image">
        
        `;
  }
  box.innerHTML = code;
}

renderImages(container);

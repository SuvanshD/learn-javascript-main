let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// ["China", "India", "USA", "Indonesia", "Pakistan"]

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries.shift();
largeCountries.unshift("China");
largeCountries.pop();
largeCountries.push("Pakistan");

console.log("The 5 largest countries in the world:");
for (let i = 0; i < largeCountries.length; i += 1) {
  console.log(largeCountries[i]);
}

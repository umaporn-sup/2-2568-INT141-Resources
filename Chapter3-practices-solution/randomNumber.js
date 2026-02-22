//Write a function named randomNumber(min, max) that accepts two numbers specifying the minimum and maximum range for random number generation.
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(randomNumber(1, 10)) // 1–10
console.log(randomNumber(5, 5)) // always 5
console.log(randomNumber(0, 1)) // 0 or 1
console.log(randomNumber(-5, 5)) // -5 to 5

module.exports = { randomNumber }

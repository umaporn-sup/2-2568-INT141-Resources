// Write a function isInRange(num, min, max) that returns true if num is between min and max (inclusive), and false otherwise.
function isInRange(num, min, max) {
  return num >= min && num <= max
}

console.log(isInRange(5, 1, 10)) // true
console.log(isInRange(15, 1, 10)) // false
console.log(isInRange(10, 10, 20)) // true

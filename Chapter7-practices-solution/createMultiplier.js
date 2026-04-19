// Write a function createMultiplier(x) that:
// returns a new function
// the returned function takes a value y and returns x * y

function createMultiplier(x) {
  return function (y) {
    return x * y
  }
}
const double = createMultiplier(2)
const triple = createMultiplier(3)

console.log(double(5)) // 10
console.log(triple(5)) // 15

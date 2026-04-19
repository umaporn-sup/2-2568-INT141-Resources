// Write a function limitCalls(fn, limit) that:
// Takes a function fn and a number limit
// Returns a new function
// The returned function:
// Can only be called up to limit times
// After reaching the limit, returns "Limit reached"

function limitCalls(fn, limit) {
  let callCount = 0
  return function () {
    if (++callCount <= limit) return fn()
    else return 'Limit reached'
  }
}
const sayHi = () => 'Hi'
const limited = limitCalls(sayHi, 2)

console.log(limited()) // "Hi"
console.log(limited()) // "Hi"
console.log(limited()) // "Limit reached"

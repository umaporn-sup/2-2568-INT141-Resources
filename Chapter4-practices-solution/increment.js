//Write a function increment(num, step)
// If num is a number, return incremented number
// If num is an array, return a new array with each element incremented
// If no step is provided, it defaults to 1.

function increment(num, step = 1) {
  if (Array.isArray(num)) {
    let result = []
    for (let i = 0; i < num.length; i++) {
      result.push(num[i] + step)
    }
    return result
  }

  return num + step
}
console.log(increment(5)) // 6
console.log(increment(5, 2)) // 7
console.log(increment(0, -1)) // -1
console.log(increment([1, 2, 3])) // [2, 3, 4]
console.log(increment([1, 2, 3], 2)) // [3, 4, 5]
console.log(increment([0, -1], -1)) // [-1, -2]

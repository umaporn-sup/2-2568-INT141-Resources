//Write a function named findMax(arrayofNumbers) that
// Accepts an array of numbers as a parameter
// Returns the largest number in the array
// If the array is empty, return undefined

function findMax(numbers) {
  if (numbers.length === 0) return undefined

  let max = numbers[0]

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]
    }
  }

  return max
}
console.log(findMax([3, 7, 2])) // 7
console.log(findMax([10, 5, 8, 12])) // 12
console.log(findMax([-5, -2, -9])) // -2
console.log(findMax([])) // undefined

// Write a function fizzBuzz(n) that returns an array of numbers from 1 to n. For multiples of three, the number should be replaced with "Fizz", and for multiples of five, it should be replaced with "Buzz". For numbers which are multiples of both three and five, it should be replaced with "FizzBuzz".
function fizzBuzz(n) {
  const result = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz')
    } else if (i % 3 === 0) {
      result.push('Fizz')
    } else if (i % 5 === 0) {
      result.push('Buzz')
    } else {
      result.push(i)
    }
  }
  return result
}

console.log(fizzBuzz(5)) // [1, 2, "Fizz", 4, "Buzz"]
console.log(fizzBuzz(15)) // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]

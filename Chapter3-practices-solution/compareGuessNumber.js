//Based on the randomNumber(min, max), write a function named compareGuessNumber(guessNumber) that returns the difference between the guessed number and the randomly generated number.
// The meaning of the returned value can be divided into 3 cases:
// return a negative number -> the guessed number is less than the random number.
// return a positive number -> the guessed number is greater than the random number.
// return 0 -> the guessed number is equal to the random number.

const { randomNumber } = require('./randomNumber.js')
const random = randomNumber(1, 10)
function compareGuessNumber(guessNumber) {
  return guessNumber - random
}
console.log('----------')
console.log(compareGuessNumber(8))
console.log(compareGuessNumber(10))
console.log(compareGuessNumber(5))
console.log(compareGuessNumber(1))
console.log(compareGuessNumber(10))
console.log('----------')

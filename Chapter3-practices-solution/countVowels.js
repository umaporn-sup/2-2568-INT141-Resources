// Write a function countVowels(str) that returns the number of vowels in a given string.
function countVowels(str) {
  if (!str) return undefined
  // sol#1 - switch cases
  let count = 0
  for (let ch of str) {
    switch (ch) {
      case 'a':
      case 'A':
      case 'e':
      case 'E':
      case 'i':
      case 'I':
      case 'o':
      case 'O':
      case 'u':
      case 'U':
        count++
    }
  }
  return count
  //sol#2 - includes
  // const vowels = 'aeiouAEIOU'
  // let count = 0
  // for (let char of str) {
  //   if (vowels.includes(char)) {
  //     count++
  //   }
  // }
  // return count
}

console.log(countVowels('Hello World')) // 3
console.log(countVowels('xyz')) // 0
console.log(countVowels(null)) // undefined
console.log(countVowels(undefined)) // undefined

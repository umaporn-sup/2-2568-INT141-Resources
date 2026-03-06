// Write a function that takes an array of strings as input and returns an array containing the length of each string.
function getStringLengths(arr) {
  const strLength = []
  for (const element of arr) {
    strLength.push(element.length)
  }
  return strLength
  // return arr.map((s) => s.length)
}

// Example
console.log(getStringLengths(['apple', 'banana', 'kiwi', 'orange'])) //[5, 6, 4, 6]
console.log(getStringLengths(['hello', 'world'])) //[5, 5]
console.log(getStringLengths(['ChatGPT', 'AI'])) //[7,2]

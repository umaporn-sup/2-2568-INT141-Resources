//Write a function named reverseString(anyString) that accepts any text and returns the text with its characters reversed. If the input is null or undefined, return undefined.

function reverseString(anyString) {
  if (anyString === null || anyString === undefined) {
    return undefined
  }

  let result = ''
  for (let i = anyString.length - 1; i >= 0; i--) {
    result += anyString[i]
  }
  return result
}
console.log(reverseString('Hello World')) // "dlroW olleH"
console.log(reverseString('happyday')) // "yadyppah"
console.log(reverseString('')) // ""
console.log(reverseString(null)) // undefined
console.log(reverseString(undefined)) // undefined

// Write a function reverseAndUppercase(str) that reverses the given string and converts it to uppercase.
// function reverseAndUppercase(str) {
//   return str.split('').reverse().join('').toUpperCase()
// }
function reverseAndUppercase(str) {
  if (str === null || str === undefined) return ''
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i].toUpperCase()
  }
  return result
}
console.log(reverseAndUppercase('hello')) // 'OLLEH'
console.log(reverseAndUppercase('JavaScript')) // 'TPIRCSEVAJ'
console.log(reverseAndUppercase('')) // ''

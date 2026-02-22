// Write a function getType(value) that returns a string representing the type of the value. The possible return values are "string", "number", "boolean", "object", "function", "undefined", and "symbol".

function getType(value) {
  return typeof value
}
console.log(getType('hello')) //string
console.log(getType(123)) //number
console.log(getType(true)) //boolean
console.log(getType([])) //object
console.log(getType({})) //object
console.log(getType(function () {})) //functiongit
console.log(getType(undefined)) //undefined
console.log(getType(null)) //object
console.log(getType(Symbol())) //symbol

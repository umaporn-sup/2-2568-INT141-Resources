// Write a function detailedType(value) that returns a string representing the detailed type of the value. It should distinguish between arrays and objects, and handle null.
function detailedType(value) {
  if (Array.isArray(value)) return 'array'
  if (value === null) return 'null'
  return typeof value
}
console.log(detailedType('hello')) // 'string'
console.log(detailedType(123)) // 'number'
console.log(detailedType(true)) // 'boolean'
console.log(detailedType({})) // 'object'
console.log(detailedType([])) // 'array'
console.log(detailedType(null)) // 'null'
console.log(detailedType(function () {})) // 'function'
console.log(detailedType(undefined)) // 'undefined'
console.log(detailedType(Symbol())) // 'symbol'

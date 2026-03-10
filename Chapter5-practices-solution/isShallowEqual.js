//Write a function isShallowEqual(obj1, obj2) that checks if two objects have the same keys and values (shallow comparison).

function isShallowEqual(obj1, obj2) {
  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object'
  ) {
    return false
  }

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) return false

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }

  return true
}
console.log(isShallowEqual({ a: 1, b: 2 }, { b: 2, a: 1 })) // true
console.log(isShallowEqual({ a: 1 }, { a: 2 })) // false
console.log(isShallowEqual({ a: 1 }, { a: 1, b: 2 })) // false

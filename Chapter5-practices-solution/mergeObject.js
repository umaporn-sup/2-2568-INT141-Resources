// Write a function mergeObject(obj1, obj2) and return merges two objects.
function mergeObject(obj1, obj2) {
  const merged = { ...obj1, ...obj2 }
  return merged
}

console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' })) //{ name: 'John', age: 25, city: 'New York' }
console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' })) //{ name: 'Jane', age: 30, country: 'USA' }

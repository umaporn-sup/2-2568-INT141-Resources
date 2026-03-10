// Write a function addProperty(obj, key, value) that adds a new property to an object and returns the updated object.
function addProperty(obj, key, value) {
  obj[key] = value
  return obj
}

console.log(addProperty({ name: 'John' }, 'age', 25)) // { name: 'John', age: 25 }
console.log(addProperty({}, 'city', 'New York')) // { city: 'New York' }

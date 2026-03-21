// Write a function extractAndRename(obj) that extracts properties name and age from an object, renames them to fullName and yearsOld, and returns a new object with these properties.
function extractAndRename(obj) {
  const { name: fullName, age: yearsOld } = obj
  return { fullName, yearsOld }
}

console.log(extractAndRename({ name: 'John', age: 25, city: 'New York' })) // { fullName: 'John', yearsOld: 25 }
console.log(extractAndRename({ name: 'Jane', age: 30 })) // { fullName: 'Jane', yearsOld: 30 }

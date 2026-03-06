// Write a function combineArrays(arr1, arr2) that takes two arrays and returns a new array that contains all elements from both arrays.
function combineArrays(arr1, arr2) {
  return [...arr1, ...arr2]
}

console.log(combineArrays([1, 2], [3, 4])) // [1, 2, 3, 4]
console.log(combineArrays(['a', 'b'], ['c', 'd'])) // ['a', 'b', 'c', 'd']
console.log(combineArrays([], [1, 2, 3])) // [1, 2, 3]

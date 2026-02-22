//Write a function named fillStartWord(startWord, word) that accepts any text and returns the value of word with startWord added to the beginning of it.  If word already starts with startWord, do not add startWord again. If word is null or undefined, return undefined.
function fillStartWord(startWord, word) {
  if (word === null || word === undefined) {
    return undefined
  }

  if (word.startsWith(startWord)) {
    return word
  }

  return startWord + word
}
console.log(fillStartWord('1-2565-', 'Hello World')) // "1-2565-Hello World"
console.log(fillStartWord('JS', 'beginner')) // "JSbeginner"
console.log(fillStartWord('first', 'firststep')) // "firststep"
console.log(fillStartWord('first', null)) // undefined
console.log(fillStartWord('first', undefined)) // undefined

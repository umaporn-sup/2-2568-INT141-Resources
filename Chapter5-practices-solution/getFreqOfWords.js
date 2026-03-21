//Write a function getFreqOfWords(sentence) that returns an object with keys representing unique words in lowercase and values representing the frequency of occurrences of each word with ignore case in the sentence. If the input string is null or undefined, return undefined.

function getFreqOfWords(sentence) {
  const words = sentence.toLowerCase().split(' ')

  const freqs = {}
  for (const word of words) {
    if (freqs[word] === undefined) freqs[word] = 1
    else ++freqs[word]
  }
  return freqs
}
console.log(getFreqOfWords('this is a gift is'))

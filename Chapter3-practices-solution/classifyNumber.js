// Write a function classifyNumber(num) that classifies a number as "positive", "negative", or "zero".
function classifyNumber(num) {
  if (num > 0) return 'positive'
  if (num < 0) return 'negative'
  return 'zero'
}

console.log(classifyNumber(5)) // 'positive'
console.log(classifyNumber(-3)) // 'negative'
console.log(classifyNumber(0)) // 'zero'

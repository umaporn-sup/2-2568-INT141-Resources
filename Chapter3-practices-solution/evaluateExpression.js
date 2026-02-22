// Write a function evaluateExpression(a, b, operator) that takes two numbers a and b, and a string operator which can be "+", "-", "*" or "/". The function should return the result of the arithmetic operation.
function calculateExpression(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return a / b
    default:
      throw new Error('Invalid operator')
  }
}

console.log(calculateExpression(1, 2, '*')) //2
console.log(calculateExpression(1, 2, '/')) //0.5
console.log(calculateExpression(1, 2, '-')) //-1
console.log(calculateExpression(1, 2, '+')) //3

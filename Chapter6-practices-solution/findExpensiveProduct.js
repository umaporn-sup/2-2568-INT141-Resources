// You are given an array of objects representing products. Each object has the following properties:
// name: The product name (string)
// price: The product price (number)
// Your task is to find the first product that costs more than 500.
// Write a function findExpensiveProduct that takes an array of products and returns the first product object whose price is greater than 500. If none exists, return null.

function findExpensiveProduct(products) {
  const product = products.find((p) => p.price > 500)
  return product || null
}
// Example usage:
const products = [
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 80 },
  { name: 'Tablet', price: 600 },
  { name: 'Laptop', price: 1200 }
]

const expensive = findExpensiveProduct(products)
console.log(expensive)

// Output should be:
//{ name: "Tablet", price: 600 }

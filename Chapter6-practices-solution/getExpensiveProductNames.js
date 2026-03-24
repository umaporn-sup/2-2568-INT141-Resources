// Create a function getExpensiveProductNames(products) that:
// Filters products with price greater than 100
// Returns an array of product names only
function getExpensiveProductNames(products) {
  return products
    .filter((product) => product.price > 100)
    .map((product) => product.name)
}

const products = [
  { name: 'Mouse', price: 50 },
  { name: 'Keyboard', price: 120 },
  { name: 'Monitor', price: 300 }
]

console.log(getExpensiveProductNames(products)) //["Keyboard", "Monitor"]

// You are given an array of objects representing products. Each object has the following properties:
// name: The product name (a string)
// stock: The number of items in stock (a number)
// Your task is to create a new array that contains only the names of products that have stock greater than 0.Additionally, add the prefix "AVAILABLE: " to each product name.
// Write a function getAvailableProducts that returns the result.

function getAvailableProducts(products) {
  return products
    .filter((product) => product.stock > 0)
    .map((product) => `AVAILABLE: ${product.name}`)
}
const products = [
  { name: 'Laptop', stock: 10 },
  { name: 'Mouse', stock: 0 },
  { name: 'Keyboard', stock: 5 },
  { name: 'Monitor', stock: 0 }
]
console.log(getAvailableProducts(products))

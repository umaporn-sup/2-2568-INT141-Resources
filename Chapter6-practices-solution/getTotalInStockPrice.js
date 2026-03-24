//You are given an array of objects representing products in a store. Each object has the following properties:
// name: The product name (string)
// price: The product price (number)
// inStock: Whether the product is available (boolean)
// Your task is to calculate the total price of all products that are currently in stock.
// Write a function getTotalInStockPrice that takes an array of product objects and returns the total price of the products that are in stock.

function getTotalInStockPrice(products) {
  return products
    .filter((product) => product.inStock === true)
    .reduce((total, product) => total + product.price, 0)
}
// Example usage:
const products = [
  { name: 'Laptop', price: 1200, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true },
  { name: 'Monitor', price: 300, inStock: false },
  { name: 'Headphones', price: 150, inStock: true }
]

const total = getTotalInStockPrice(products)
console.log(total)

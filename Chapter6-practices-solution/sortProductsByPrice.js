//Create a function sortProductsByPrice(products) that:
// Takes an array of product objects.
// Each product contains name and price.
// Returns a new array sorted by price in ascending order.

function sortProductsByPrice(products) {
  return [...products].sort((a, b) => a.price - b.price)
}

const products = [
  { name: 'Keyboard', price: 120 },
  { name: 'Mouse', price: 50 },
  { name: 'Monitor', price: 300 },
  { name: 'USB Cable', price: 20 }
]

console.log(sortProductsByPrice(products))
// [
//   ({ name: 'USB Cable', price: 20 },
//   { name: 'Mouse', price: 50 },
//   { name: 'Keyboard', price: 120 },
//   { name: 'Monitor', price: 300 })
// ]

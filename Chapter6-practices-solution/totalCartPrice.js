//Create a function totalCartPrice(cart) that:
// Uses map() to get all product prices
// Uses reduce() to calculate the total price
function totalCartPrice(cart) {
  return cart
    .map((item) => item.price)
    .reduce((total, price) => total + price, 0)
}

const cart = [
  { name: 'Book', price: 200 },
  { name: 'Pen', price: 20 },
  { name: 'Notebook', price: 80 }
]

console.log(totalCartPrice(cart)) //300

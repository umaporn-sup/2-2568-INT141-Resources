export class Product {
  constructor({ id, name, price, category, stock }) {
    this.id = id
    this.name = name
    this.price = price
    this.category = category
    this.stock = stock
  }

  increaseStock(quantity) {
    this.stock += quantity
  }

  decreaseStock(quantity) {
    if (quantity > this.stock) throw new Error('Not enough stock')
    this.stock -= quantity
  }

  isAvailable() {
    return this.stock > 0
  }

  getTotalPrice(quantity) {
    return this.price * quantity
  }
}

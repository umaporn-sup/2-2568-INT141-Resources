import { Order } from '../models/Order.js'

export function addItemToOrder(order, product, quantity) {
  const existingProduct = order.items.find(
    (item) => item.productId === product.id
  )
  if (existingProduct) existingProduct.quantity += quantity
  else
    order.items.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity
    })
  product.decreaseStock(quantity)
}

export function removeItemFromOrder(order, productId) {
  if (!(order instanceof Order)) throw new Error('Invalid Order')
  order.items = order.items.filter((item) => item.productId !== productId)
}

export function updateItemQuantity(order, productId, quantity) {
  const existingProduct = order.items.find(
    (item) => item.productId === productId
  )
  if (existingProduct) existingProduct.quantity += quantity
}

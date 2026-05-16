import { Order } from '../models/Order.js'
import { Product } from '../models/Product.js'
export function addItemToOrder(order, product, quantity) {
  if (!(product instanceof Product)) throw new Error('Invalid Product')
  if (!(order instanceof Order)) throw new Error('Invalid Order')
  if (!product.isAvailable()) {
    throw new Error('Product not available')
  }
  if (quantity <= 0) {
    throw new Error('Invalid quantity')
  }
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
export function safeAddItemToOrder(order, product, quantity) {
  try {
    addItemToOrder(order, product, quantity)

    return {
      success: true,
      message: 'Item added successfully',
      data: order
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: null
    }
  } finally {
    console.log('Add item Finished')
  }
}

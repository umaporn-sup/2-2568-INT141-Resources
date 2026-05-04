import { Product } from './models/Product.js'
import { Order } from './models/Order.js'

import {
  addItemToOrder,
  removeItemFromOrder,
  updateItemQuantity
} from './services/orderService.js'
import { calculateTotal } from './services/priceService.js'
import {
  filterOrdersByStatus,
  getHighValueOrders,
  getCustomerNames,
  searchOrdersByCustomer
} from './utils/orderUtils.js'
import { pricingConfig } from './config/pricingConfig.js'

// Create products
const laptop = new Product({
  id: 'P001',
  name: 'Laptop',
  price: 30000,
  category: 'Electronics',
  stock: 10
})

const mouse = new Product({
  id: 'P002',
  name: 'Mouse',
  price: 500,
  category: 'Accessories',
  stock: 50
})

const ipad = new Product({
  id: 'P003',
  name: 'Ipad',
  price: 55000,
  category: 'Accessories',
  stock: 100
})

// Create order
const order1 = new Order({
  id: 'O001',
  customer: { name: 'Alice' }
})
console.log(order1)

// Add items
addItemToOrder(order1, laptop, 1)
addItemToOrder(order1, mouse, 2)
addItemToOrder(order1, ipad, 1)
removeItemFromOrder(order1, 'P002')
updateItemQuantity(order1, 'P003', 3)

console.log(order1)
const result1 = calculateTotal(order1, pricingConfig)
console.log(result1)
console.log('---')
const order2 = new Order({
  id: 'O002',
  customer: { name: 'Bob' },
  status: 'approve'
})
addItemToOrder(order2, mouse, 10)
console.log(order2)
const result2 = calculateTotal(order2, pricingConfig)
console.log(result2)
console.log('---')
const allOrders = [order1, order2]
console.log(allOrders)
console.log('---')
console.log(filterOrdersByStatus(allOrders, 'approve'))
console.log('---')
console.log(getHighValueOrders(allOrders, 5000, pricingConfig))
console.log('---')
console.log(getCustomerNames(allOrders))
console.log('---')
console.log(searchOrdersByCustomer(allOrders, 'BOB'))

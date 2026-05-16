import { Product } from './models/Product.js'
import { Order } from './models/Order.js'

import {
  addItemToOrder,
  removeItemFromOrder,
  updateItemQuantity,
  safeAddItemToOrder
} from './services/orderService.js'
import { calculateTotal } from './services/priceService.js'
import {
  filterOrdersByStatus,
  getHighValueOrders,
  getCustomerNames,
  searchOrdersByCustomer,
  isValidCustomerName,
  isValidOrderId,
  searchOrdersByCustomerRegex
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

//JSDate Extension
console.log('---order#3---')
const order3 = new Order({
  id: 'O001',
  customer: { name: 'Alice' },
  createdAt: '2026-05-07T00:00:00Z'
})
// Assume today = 2026-05-07
console.log(order3.getOrderAge()) //1
console.log(order3.isRecentOrder(1)) //true
console.log(order3.isRecentOrder(2)) // true
console.log(order3.getCreatedAtByTimezone('Asia/Bangkok'))
//UTC+07:00
// Example Output: 5/7/2026, 7:00:00 AM
console.log(order3.getCreatedAtByTimezone('Asia/Tokyo')) //UTC+09:00
// Example Output: 5/7/2026, 9:00:00 AM
console.log(order3.getCreatedAtByTimezone('America/New_York')) // UTC-04:00
// Example Output: 5/6/2026, 8:00:00 PM

//Regular Expression Extension
console.log('---')
console.log(isValidOrderId('O123')) // true
console.log(isValidOrderId('X123')) // false
console.log(isValidCustomerName('Alice')) // true
console.log(isValidCustomerName('Alice Tan')) // true
console.log(isValidCustomerName('Alice123')) // false

const orders = [
  new Order({
    id: 'O001',
    customer: { name: 'Alice' }
  }),
  new Order({
    id: 'O002',
    customer: { name: 'Bob Lee' }
  }),
  new Order({
    id: 'O003',
    customer: { name: 'ALISON' }
  })
]
console.log(searchOrdersByCustomerRegex(orders, 'ali'))
console.log('---')
const order4 = new Order({
  id: 'O002',
  customer: { name: 'Bob Lee' }
})
const noStockProduct = new Product({
  id: 'P001',
  name: 'Laptop',
  price: 30000,
  category: 'Electronics',
  stock: 0
})
//Success Case
// const result4 = safeAddItemToOrder(order4, ipad, 2)

//Error Case
// const result4 = safeAddItemToOrder('order4', ipad, 2)
// const result4 = safeAddItemToOrder(order4, 'ipad', 2)
// const result4 = safeAddItemToOrder(order4, ipad, 0)
const result4 = safeAddItemToOrder(order4, noStockProduct, 2)

if (result4.success) {
  console.log(result4.message)
  console.log(result4.data)
} else {
  console.log('Error:', result4.message)
}

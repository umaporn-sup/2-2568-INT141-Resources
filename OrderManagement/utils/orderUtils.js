import { calculateTotal } from '../services/priceService.js'

export function filterOrdersByStatus(orders, status) {
  return orders.filter((order) => order.status === status)
}

export function getHighValueOrders(orders, minTotal, config) {
  return orders.filter(
    (order) => calculateTotal(order, config).total >= minTotal
  )
}

export function getCustomerNames(orders) {
  return orders.map((order) => order.customer.name)
}

export function searchOrdersByCustomer(orders, keyword) {
  return orders.filter((order) =>
    order.customer.name.toLowerCase().includes(keyword.toLowerCase())
  )
}

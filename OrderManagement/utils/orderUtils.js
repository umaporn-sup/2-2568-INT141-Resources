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

//Regular Expression Extension

export function isValidOrderId(orderId) {
  const regex = /^O\d{3}$/
  return regex.test(orderId)
}
export function isValidCustomerName(name) {
  const regex = /^[A-Za-z ]+$/
  return typeof name === 'string' && name.trim() !== '' && regex.test(name)
}

export function searchOrdersByCustomerRegex(orders, keyword) {
  if (typeof keyword !== 'string' || keyword.trim() === '') {
    return []
  }
  const regex = new RegExp(keyword, 'i')
  return orders.filter((order) => regex.test(order.customer.name))
}

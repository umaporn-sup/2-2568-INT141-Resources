export const discountStrategies = {
  noDiscount: (subtotal, value) => 0,
  percentage: (subtotal, value) => subtotal * value,
  fixed: (subtotal, value) => Math.min(value, subtotal)
}

export function calculateSubTotal(items) {
  return items.reduce((total, item) => total + item.quantity * item.price, 0)
}
export function calculateTax(amount, taxRate) {
  return amount * taxRate
}
export function calculateDiscount(subtotal, type, value) {
  const strategy = discountStrategies[type] || discountStrategies.noDiscount
  return strategy(subtotal, value)
}
export function calculateTotal(order, config) {
  const subTotal = calculateSubTotal(order.items)
  const discount = calculateDiscount(
    subTotal,
    config.discountType,
    config.discountValue
  )
  const tax = calculateTax(subTotal - discount, config.taxRate)

  return {
    subTotal,
    discount,
    tax,
    total: subTotal - discount + tax
  }
}

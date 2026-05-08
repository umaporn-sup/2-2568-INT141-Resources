export class Order {
  constructor({
    id,
    customer,
    status = 'pending',
    items = [],
    createdAt = new Date()
  }) {
    this.id = id
    this.customer = customer
    this.status = status
    this.items = items
    this.createdAt = new Date(createdAt)
  }

  //JS Datetime Extension
  getOrderAge() {
    const now = new Date()
    const diffTime = now.getTime() - this.createdAt.getTime()
    return Math.floor(diffTime / (1000 * 60 * 60 * 24))
  }

  isRecentOrder(days) {
    return this.getOrderAge() <= days
  }

  getCreatedAtByTimezone(timeZone) {
    try {
      return this.createdAt.toLocaleString('en-US', {
        timeZone: timeZone
      })
    } catch (error) {
      const systemOptions = Intl.DateTimeFormat().resolvedOptions()
      return this.createdAt.toLocaleString(
        systemOptions.locale,
        systemOptions.timeZone
      )
    }
  }
}

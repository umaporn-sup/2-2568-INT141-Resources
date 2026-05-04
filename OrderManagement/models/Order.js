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
}

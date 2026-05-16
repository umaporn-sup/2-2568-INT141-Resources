export class NotCompleteDataError extends Error {
  constructor(message) {
    super(message)
    this.name = 'NotCompleteDataError'
  }
}

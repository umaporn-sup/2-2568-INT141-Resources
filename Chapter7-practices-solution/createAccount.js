// Write a function createAccount(initialBalance) that:
// Stores balance as a private variable
// Returns an object with the following methods:
// deposit(amount)
// withdraw(amount) (must not allow negative balance)
// getBalance()

function createAccount(initialBalance) {
  let balance = initialBalance

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount
      }
    },
    withdraw(amount) {
      if (amount > 0 && balance - amount >= 0) {
        balance -= amount
      }
    },
    getBalance() {
      return balance
    }
  }
}
const acc = createAccount(100)

acc.deposit(50)
acc.withdraw(30)

console.log(acc.getBalance()) // 120

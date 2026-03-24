//Create a function getActiveUsers(users) that returns only users whose active property is true.
function getActiveUsers(users) {
  return users.filter((user) => user.active)
}

const users = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false },
  { name: 'Charlie', active: true }
]

console.log(getActiveUsers(users))
//[ { name: 'Alice', active: true }, { name: 'Charlie', active: true } ]

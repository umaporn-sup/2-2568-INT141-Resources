//Create a function getUserNames(users) that returns an array containing only user names.
function getUserNames(users) {
  return users.map((user) => user.name)
}

const users = [
  { id: 1, name: 'Anna' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Mike' }
]

console.log(getUserNames(users)) //[ 'Anna', 'John', 'Mike' ]

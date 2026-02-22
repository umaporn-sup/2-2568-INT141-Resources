// Write a function isValidPassword(password) that returns true if the password meets the following criteria:
// At least 8 characters long
// Contains at least one uppercase letter
// Contains at least one lowercase letter
// Contains at least one number

function isValidPassword(password) {
  if (password.length < 8) return false

  let hasUpper = false
  let hasLower = false
  let hasNumber = false

  for (let i = 0; i < password.length; i++) {
    const ch = password[i]

    if (ch >= 'A' && ch <= 'Z') {
      hasUpper = true
    } else if (ch >= 'a' && ch <= 'z') {
      hasLower = true
    } else if (ch >= '0' && ch <= '9') {
      hasNumber = true
    }
  }

  return hasUpper && hasLower && hasNumber
}

console.log(isValidPassword('Password123')) // true
console.log(isValidPassword('pass123')) // false
console.log(isValidPassword('PASSWORD123')) // false
console.log(isValidPassword('Pass12')) // false

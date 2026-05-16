import { NotCompleteDataError } from './NotCompleteDataError.js'
import { Student } from './Student.js'
function validateStudentData(student) {
  if (!(student instanceof Student)) throw new TypeError('Not a Student')
  if (!student.id || !student.firstname || !student.lastname)
    throw new NotCompleteDataError('Student Data is not completed')
  if (!Number.isInteger(student.id)) throw new TypeError('Not a valid number')
}

function checkin(student) {
  try {
    validateStudentData(student)
    console.log(`check in: ${student.id} at ${new Date(Date.now())}`)
  } catch (error) {
    if (error instanceof TypeError) console.log(`Type Error: ${error.message}`)
    else console.log(`${error.name}, ${error.message}`)
  }
}

checkin('Somchai')
//Type Error: Not a Student
checkin(new Student('abc', 'Somchai', 'Rakdee'))
//Type Error: Not a valid number
checkin(new Student(123, 'Somchai'))
//NotCompleteDataError, Student Data is not completed
checkin(new Student(123, 'Somchai', 'Rakdee'))
//check in: 123 at Tue May 12 2026 14:33:39 GMT+0700 (Indochina Time)

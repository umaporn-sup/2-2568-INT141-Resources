//You are given an array of objects representing student exam scores. Each object has the following properties:
// name: The student's name (string)
// score: The student's score (number)
// Your task is to check whether any student scored 95 or higher.
// Write a function hasExcellentStudent that takes an array of student objects and returns true if at least one student scored 95 or more, otherwise return false.

function hasExcellentStudent(students) {
  return students.some((student) => student.score >= 95)
}
// Example usage:
const students = [
  { name: 'Alice', score: 88 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 97 },
  { name: 'David', score: 75 }
]

const result = hasExcellentStudent(students)
console.log(result)

//You are given an array of objects representing students' exam scores. Each object has the following properties:
// name: The student's name (a string).
// score: The student's score on the exam (a number).
// Your task is to create a new array that contains only the names of students who passed the exam.
// A passing score is defined as a score of 70 or higher. Additionally, you should convert the names to uppercase in the new array.
// Write a function getPassingNames that takes an array of student objects and returns an array of uppercase names of students who passed the exam.

function getPassingNames(students) {
  return students
    .filter((student) => student.score >= 70)
    .map((student) => student.name.toUpperCase())
}
// Example usage:
const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 }
]
const passingNames = getPassingNames(studentScores)
console.log(passingNames)
// Output should be: ["ALICE", "BOB", "EVE"]

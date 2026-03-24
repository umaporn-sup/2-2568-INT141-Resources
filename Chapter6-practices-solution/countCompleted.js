//Create a function countCompleted(tasks) that counts how many tasks have completed: true.
function countCompleted(tasks) {
  return tasks.reduce((count, task) => {
    if (task.completed) count++
    return count
  }, 0)
}

const tasks = [
  { title: 'Task A', completed: true },
  { title: 'Task B', completed: false },
  { title: 'Task C', completed: true }
]

console.log(countCompleted(tasks)) //2

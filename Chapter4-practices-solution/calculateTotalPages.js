// Write a JavaScript function calculateTotalPages(items, itemsPerPage) that takes two parameters:
// items (number): The total number of items.
// itemsPerPage (number): The maximum number of items allowed per page.
// The function should return the total number of pages needed to accommodate all the items. If items is 0, the function should return 0 pages. If itemsPerPage is 0 or a negative value, the function should throw an error since a page must be able to contain at least one item.

function calculateTotalPages(items, itemsPerPage) {
  if (itemsPerPage <= 0) {
    throw new Error('Items per page must be greater than zero.')
  }

  if (items === 0) {
    return 0
  }

  // Calculate total pages
  return Math.ceil(items / itemsPerPage)
}

console.log(calculateTotalPages(10, 3)) // 4
console.log(calculateTotalPages(25, 5)) //5
console.log(calculateTotalPages(0, 5)) //0
console.log(calculateTotalPages(10, 10)) //1
// calculateTotalPages(10, 0) //throw Error('Items per page must be greater than zero.')

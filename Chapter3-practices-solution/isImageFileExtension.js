//Write a function named isImageFileExtension(fileName) that accepts a file name (including its file extension) and checks whether it is an image file extension (.png, .jpg, .jpeg, .gif, .svg). If it is an image file, return true; otherwise, return false. If the value is null or undefined, return false.

function isImageFileExtension(fileName) {
  if (!fileName) return false
  const lowerFileName = fileName.toLowerCase()
  return (
    lowerFileName.endsWith('.png') ||
    lowerFileName.endsWith('.jpg') ||
    lowerFileName.endsWith('.jpeg') ||
    lowerFileName.endsWith('.gif') ||
    lowerFileName.endsWith('.svg')
  )
}

console.log(isImageFileExtension('sample.jpg')) //true
console.log(isImageFileExtension('sample.jpeg')) //true
console.log(isImageFileExtension('sample.svg')) //true
console.log(isImageFileExtension('sample.png')) //true
console.log(isImageFileExtension('sample.gif')) //true
console.log(isImageFileExtension('sample.doc')) //false
console.log(isImageFileExtension('sample.pdf')) //false
console.log(isImageFileExtension(null)) //false
console.log(isImageFileExtension(undefined)) //false

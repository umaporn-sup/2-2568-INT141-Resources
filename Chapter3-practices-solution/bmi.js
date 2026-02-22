// Write a function named calculateBMI(weight, height) to calculate the Body Mass Index (BMI) using the following formula.

function calculateBMI(weight, height) {
  return weight / (height * height)
}
//Write another function named getBMIMeaning(weight, height) that calls the calculateBMI function to compute the BMI and returns a message indicating the BMI weight category.
function getBMIMeaning(weight, height) {
  const bmi = calculateBMI(weight, height)

  if (bmi < 18.5) {
    return 'Underweight'
  } else if (bmi <= 25) {
    return 'Normal weight'
  } else {
    return 'Overweight'
  }
}

console.log(getBMIMeaning(65, 1.8)) //Normal weigth
console.log(getBMIMeaning(80, 1.7)) //Overweight
console.log(getBMIMeaning(44, 1.6)) //Underweight

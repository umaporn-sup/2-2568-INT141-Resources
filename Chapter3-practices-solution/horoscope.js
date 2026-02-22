//Write a function named horoscope(year) to display the zodiac sign that corresponds to the given year.
// There are 12 zodiac signs in total, each represented by an animal.
//0: monkey, 1: rooster, 2: dog, 3: pig, 4: rat, 5: ox, 6: tiger
//7: rabbit, 8: dragon, 9: snake, 10: horse, 11: sheep
function horoscope(year) {
  const zodiac = [
    'monkey', // 0
    'rooster', // 1
    'dog', // 2
    'pig', // 3
    'rat', // 4
    'ox', // 5
    'tiger', // 6
    'rabbit', // 7
    'dragon', // 8
    'snake', // 9
    'horse', // 10
    'goat' // 11
  ]

  return zodiac[year % 12]
}
console.log(horoscope(1900)) // rat
console.log(horoscope(1980)) // monkey
console.log(horoscope(2024)) // dragon
console.log(horoscope(1991)) // goat
console.log(horoscope(2000)) // dragon

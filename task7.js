//-Write a function that determines whether a given year is a leap year.

const leapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return("Year is a Leap Year");
  } else {
    return("Year is NOT a Leap Year");
  }
}
const result = leapYear(1600)
console.log(result)
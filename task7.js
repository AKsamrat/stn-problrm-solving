//-Write a function that determines whether a given year is a leap year.

const leapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Year is a Leap Year");
  } else {
    console.log("Year is NOT a Leap Year");
  }
}
leapYear(1600)
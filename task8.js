//-Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const numbers = [1, 2, 55, 23, 4, 23, 55, 2]
const removeDuplicates = () => {
  const result = numbers.filter((number, index) => numbers.indexOf(number) === index)
  // const result = [...new Set(numbers)];
  console.log(result)
}

removeDuplicates(numbers)
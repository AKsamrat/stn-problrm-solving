//-Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const number = [1, 21, 45, 12, 25, 48, 3, 11, 17]

const calculateSum = (number) =>{
  const result = number.reduce((accu, current) => {
    if (current%2 == 0) {
      
      return accu + current;
    } else {
    //  console.log(accu)
      return accu
    }
  },0)
  
  return result 
  
}
const result = calculateSum(number)
if (result === 0) {
  console.log("No even number found");
} else {
  console.log("Sum of even numbers:", result);
}
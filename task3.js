//Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.


const square = (data) => {
  return Math.pow(data, 2);
};
const double = (data) => {
  return data*2
}
const addFive = (data) => {
  return data+5
}

const finalFunction = (data) => {
 const squareData= square(data)
  const doubleData = double(squareData)
  return addFive(doubleData)
}

const result=finalFunction(5)
console.log(result)
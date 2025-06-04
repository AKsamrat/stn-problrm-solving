//-Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2019 },
  { make: "Ford", model: "Mustang", year: 2021 },
  { make: "Tesla", model: "Model 3", year: 2022 },
  { make: "BMW", model: "X5", year: 2018 },
  { make: "Audi", model: "A4", year: 2020 }
];

const sortedCar = (cars) => {
  const result = cars.sort((a, b) => (a.year - b.year))
  console.log(result)
}
sortedCar(cars)
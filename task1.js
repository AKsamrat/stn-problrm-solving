//Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Rakib", age: 25, gender: "Male" },
  { name: "Tania", age: 22, gender: "Female" },
  { name: "Hasan", age: 30, gender: "Male" },
  { name: "Nusrat", age: 28, gender: "Female" },
  { name: "Shuvo", age: 26, gender: "Male" },
  { name: "Mitu", age: 24, gender: "Female" }
];

const filterFemale = (people) => {
  const person = people.filter(obj => (obj.gender !== "Female")).map(data=>(data.name))  
  console.log(person)
}

filterFemale(people)
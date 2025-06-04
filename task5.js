//Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const persons = [
  { name: "Rakib", age: 25, gender: "Male" },
  { name: "Tania", age: 22, gender: "Female" },
  { name: "Hasan", age: 30, gender: "Male" },
  { name: "Nusrat", age: 28, gender: "Female" },
  { name: "Shuvo", age: 26, gender: "Male" },
  { name: "Mitu", age: 24, gender: "Female" }
];

const updateAge = (persons,newName,newAge) => {
  const findPersone = persons.find(person => (person.name === `${newName}`))
  if (findPersone) {
   findPersone.age = newAge ;
  }
  console.log(persons)
}

const newName = "Shuvo"
const newAge=29 

updateAge(persons,newName,newAge)
//-Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
];

const findBookTitle = (books) => {
  const result = books.map(book => (book.title))
  return result;
}
const result=findBookTitle(books)
console.log(result)
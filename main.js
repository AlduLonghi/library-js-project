let myLibrary = [book1, book2];

function Book(title, author, pagesNum, read) {
  this.title = title;
  this.author = author;
  this.pagesNum = pagesNum;
  this.read = read;
}

function addBookToLibrary() {
  
}

const bookCard = document.querySelector('#books-table')

function displayBooks(books) {
  for (let book in books) {
    let tableRow = document.createElement('tr');
    let bookTitle = document.createElement('td');
    let bookTitle = document.createTextNode(books[book].title);
    tableRow.appendChild(bookTitle);
    bookCard.appendChild(tableRow);
  }
}

const book1 = new Book('La tregua', 'Mario Benedetti', '300', true);
const book2 = new Book('Harry Potter', 'JK Rowling', '1000', true);

displayBooks(myLibrary);

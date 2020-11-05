const book1 = new Book('La tregua', 'Mario Benedetti', '300', true);
const book2 = new Book('Harry Potter', 'JK Rowling', '1000', true);
let myLibrary = [book1, book2];

function Book(title, author, pagesNum, read) {
  this.title = title;
  this.author = author;
  this.pagesNum = pagesNum;
  this.read = read;
}

function addBookToLibrary() {
  
}


function displayBooks(books) {
  var bookCard = document.querySelector('#books-table')
  for (let book in books) {
    let tableRow = document.createElement('tr');
    let bookKeys = Object.values(books[book]);
    console.log(bookKeys);
    for (let key in bookKeys) {
      let bookTitle = document.createElement('td');
      let bookTitleContent = document.createTextNode(bookKeys[key]);
      bookTitle.appendChild(bookTitleContent);
      tableRow.appendChild(bookTitle);
    } 
    bookCard.appendChild(tableRow);
  }
}


displayBooks(myLibrary);


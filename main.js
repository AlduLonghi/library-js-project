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
  let bookCard = document.querySelector('#books-table')
  for (let i = 0; i < books.length; i++) {
    let bookKeys = Object.keys(books[i]);
    let book = books[i];
    let tableRow = document.createElement('tr');
    for (let i = 0; i < bookKeys.length; i++) {
      let bookTitle = document.createElement('td');
      let bookTitleContent = document.createTextNode(book[bookKeys[i]]);
      bookTitle.appendChild(bookTitleContent);
      tableRow.appendChild(bookTitle);
    } 
    bookCard.appendChild(tableRow);
  }
}


displayBooks(myLibrary);


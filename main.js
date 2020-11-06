const book1 = new Book('La tregua', 'Mario Benedetti', '300', true);
const book2 = new Book('Harry Potter', 'JK Rowling', '1000', true);




let myLibrary = [];


function Book(title, author, pagesNum, read) {
  this.title = title;
  this.author = author;
  this.pagesNum = pagesNum;
  this.read = read;
}

function addBookToLibrary() {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const bookPages = document.getElementById('pageNum').value;
  let bookStatus = false;



  if(document.getElementById('haveRead').checked) {
    bookStatus = true;
  }

  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookStatus);



  myLibrary.push(newBook);
  console.log(myLibrary);
  displayBooks(newBook);
}


function displayBooks(book) {
  let bookCard = document.querySelector('#books-table')
  
    let bookKeys = Object.keys(book);
    let tableRow = document.createElement('tr');
    for (let j = 0; j < bookKeys.length; j++) {
      let bookTitle = document.createElement('td');
      let bookTitleContent = document.createTextNode(book[bookKeys[j]]);
      bookTitle.appendChild(bookTitleContent);
      tableRow.appendChild(bookTitle);
    }

    let deleteTd = document.createElement('td');
    let deleteBtn = document.createElement('button');
    deleteBtn.type = 'button'
    deleteBtn.textContent = 'delete book'
    deleteTd.appendChild(deleteBtn);
    tableRow.appendChild(deleteTd);
    bookCard.appendChild(tableRow);
  
}




const newBookBtn = document.querySelector('#new-book-btn')

newBookBtn.onclick = () => { addBookToLibrary() };


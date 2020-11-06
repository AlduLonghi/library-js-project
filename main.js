
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
  //console.log(myLibrary);
  displayBooks(myLibrary);
}


function displayBooks(books) {
  let index = books.length - 1;
  let book = books[index];
  
  let bookCard = document.querySelector('#books-table')
  
  let bookKeys = Object.keys(book);
  let tableRow = document.createElement('tr');
  for (let j = 0; j < bookKeys.length; j++) {
    if(j === 3) {
      let bookTitle = document.createElement('td');
      let statusBtn = document.createElement('button');
      let statusBtnContent = document.createTextNode(book[bookKeys[j]]);
      statusBtn.appendChild(statusBtnContent);
      bookTitle.appendChild(statusBtn);
      tableRow.appendChild(bookTitle);
      statusBtn.id = "status-" + index;
      statusBtn.onclick = () => { changeBookStatus(index) }
    } else {
      let bookTitle = document.createElement('td');
      let bookTitleContent = document.createTextNode(book[bookKeys[j]]);
      bookTitle.appendChild(bookTitleContent);
      tableRow.appendChild(bookTitle);
    }
  }

  let deleteTd = document.createElement('td');
  let deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.textContent = 'delete book';
  deleteBtn.onclick = () => { deleteBook(index) };
  deleteTd.appendChild(deleteBtn);
  tableRow.appendChild(deleteTd);
  tableRow.id = index;
  bookCard.appendChild(tableRow);
  
}


function deleteBook(index) {
  const nodeToDelete = document.getElementById(index);
  nodeToDelete.remove();
  myLibrary.splice(index, 1);
}

Book.prototype.read = function() {
  
}

function changeBookStatus(index) {
  let bookStatus = myLibrary[index].read;

  const bookStatusToChange = document.getElementById(`status-${index}`);
  

  if(bookStatus) {
    myLibrary[index].read = false;
    bookStatusToChange.textContent = false;
  } else {
    myLibrary[index].read = true;
    bookStatusToChange.textContent = true;
  }
}

const newBookBtn = document.querySelector('#new-book-btn')

newBookBtn.onclick = () => { addBookToLibrary() };


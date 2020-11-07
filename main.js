const myLibrary = [];

function Book(title, author, pagesNum, read) {
  this.title = title;
  this.author = author;
  this.pagesNum = pagesNum;
  this.read = read;
}

function deleteBook(index) {
  const nodeToDelete = document.getElementById(index);
  nodeToDelete.remove();
}

Book.prototype.changeBookStatus = function status(index) {
  const bookStatus = myLibrary[index].read;
  const bookStatusToChange = document.getElementById(`status-${index}`);

  if (bookStatus) {
    this.read = false;
    bookStatusToChange.textContent = false;
  } else {
    this.read = true;
    bookStatusToChange.textContent = true;
  }
};

function displayBooks(books) {
  const index = books.length - 1;
  const book = books[index];
  const bookCard = document.querySelector('#books-table');

  const bookKeys = Object.keys(book);
  const tableRow = document.createElement('tr');
  for (let j = 0; j < bookKeys.length; j += 1) {
    if (j === 3) {
      const bookTitle = document.createElement('td');
      const statusBtn = document.createElement('button');
      const statusBtnContent = document.createTextNode(book[bookKeys[j]]);
      statusBtn.appendChild(statusBtnContent);
      bookTitle.appendChild(statusBtn);
      tableRow.appendChild(bookTitle);
      statusBtn.id = `status-${index}`;
      statusBtn.onclick = () => { book.changeBookStatus(index); };
    } else {
      const bookTitle = document.createElement('td');
      const bookTitleContent = document.createTextNode(book[bookKeys[j]]);
      bookTitle.appendChild(bookTitleContent);
      tableRow.appendChild(bookTitle);
    }
  }

  const deleteTd = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.textContent = 'delete book';
  deleteBtn.onclick = () => { deleteBook(index); };
  deleteTd.appendChild(deleteBtn);
  tableRow.appendChild(deleteTd);
  tableRow.id = index;
  bookCard.appendChild(tableRow);
}

function addBookToLibrary() {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const bookPages = document.getElementById('pageNum').value;
  let bookStatus = false;

  if (document.getElementById('haveRead').checked) {
    bookStatus = true;
  }

  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookStatus);

  myLibrary.push(newBook);
  displayBooks(myLibrary);
}


const newBookBtn = document.querySelector('#new-book-btn');

newBookBtn.onclick = () => { addBookToLibrary(); };

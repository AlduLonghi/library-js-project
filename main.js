const myLibrary = [];

function Book(title, author, pagesNum, read) {
  this.title = title;
  this.author = author;
  this.pagesNum = pagesNum;
  this.read = read;
}

function deleteBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

Book.prototype.changeBookStatus = function status() {
  if (this.read) {
    this.read = false;
  } else {
    this.read = true;
  }
  displayBooks();
};

function displayBooks() {
  const allBookNodes = document.querySelectorAll('.book-row');
  
  allBookNodes.forEach((node) => {
    node.remove();
  })

  const bookCard = document.querySelector('#books-table');

  for(let book of myLibrary) {  
    const bookKeys = Object.keys(book);
    const tableRow = document.createElement('tr');
    tableRow.classList = 'book-row';
    for (let j = 0; j < bookKeys.length - 1; j += 1) {
      const bookProperty = document.createElement('td');
      const bookPropertyContent = document.createTextNode(book[bookKeys[j]]);
      bookProperty.appendChild(bookPropertyContent);
      tableRow.appendChild(bookProperty);
    }
    const bookIndex = myLibrary.indexOf(book)
    const bookStatus = document.createElement('td');
    const statusBtn = document.createElement('button');
    const statusBtnContent = document.createTextNode(book.read);
    statusBtn.appendChild(statusBtnContent);
    bookStatus.appendChild(statusBtn);
    tableRow.appendChild(bookStatus);
    statusBtn.id = `status-${bookIndex}`;
    statusBtn.onclick = () => { book.changeBookStatus(); };

    const deleteTd = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'delete book';
    deleteBtn.onclick = () => { deleteBook(bookIndex); };
    deleteTd.appendChild(deleteBtn);
    tableRow.appendChild(deleteTd);
    tableRow.id = bookIndex;
    bookCard.appendChild(tableRow);
  }
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
  displayBooks();
}


const newBookBtn = document.querySelector('#new-book-btn');
newBookBtn.onclick = () => { addBookToLibrary(); };
const newBookForm = document.getElementById('new-book-form');
const displayFormBtn = document.getElementById('display-form-btn');

displayFormBtn.onclick = () => {
  if (newBookForm.style.display === 'block') {
    newBookForm.style.display = 'none';
  } else {
    newBookForm.style.display = 'block';
  }
};
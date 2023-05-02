const bookStorage = JSON.parse(localStorage.getItem('bookList')) || [];

export default class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBooks() {
    document.querySelector('.btnSubmit').addEventListener('click', (e) => {
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const message = document.querySelector('.errMessage');

      if (title === '') {
        message.innerHTML = 'Please enter title of book';
        message.style.color = 'tomato';
        message.style.fontWeight = 'bold';
        e.preventDefault();
        setTimeout(() => {
          message.innerHTML = '';
        }, 3000);
      }
      if (author === '') {
        message.innerHTML = 'Please enter author of book';
        message.style.color = 'tomato';
        message.style.fontWeight = 'bold';
        e.preventDefault();
        setTimeout(() => {
          message.innerHTML = '';
        }, 3000);
      }

      if (title && author) {
        const newBook = {
          title,
          author,
        };
        bookStorage.push(newBook);
        localStorage.setItem('bookList', JSON.stringify(bookStorage));
        this.fetchBooks();
        document.querySelector('.formReset').reset();
      }
    });
  }

  fetchBooks() {
    let markup = '';
    bookStorage.forEach((item, i) => {
      markup += `<div class="displayRow">
      <p>"${item.title}" by ${item.author}</p>  
      <button type="button" class="removeBook" id=${i}>Remove</button>
  </div>
  <hr class="divider"/>`;
    });
    document.querySelector('.all').innerHTML = markup;

    const deleteBook = () => {
      const remoVingBtnsEl = [...document.getElementsByClassName('removeBook')];
      remoVingBtnsEl.forEach((item) => {
        item.addEventListener('click', (e) => {
          bookStorage.splice(e.target.id, 1);
          localStorage.setItem('bookList', JSON.stringify(bookStorage));
          this.fetchBooks();
        });
      });
    };
    deleteBook();
  }
}
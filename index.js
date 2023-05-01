// index.js root data
import { fetchData } from './modules/data.js';
import { NewBooks } from './modules/books.js';

const title = document.querySelector('.title');
const author = document.querySelector('.author');
const form = document.querySelector('form');
const displayBooks = document.querySelector('.container');
const addForm = document.querySelector('.add-form');
const listList = document.querySelector('.list-list');
const contactInfo = document.querySelector('.contact-info');
const message = document.querySelector('span');
const selectLi = document.querySelector('.menu__items');

// Is localStorage Empty
if (localStorage.getItem('Book List') === null) {
  localStorage.setItem('Book List', JSON.stringify([]));
}

// Getting stored data from localStorage
form.onsubmit = (e) => {
  e.preventDefault();
  if (title.value === '') {
    message.innerHTML = 'Please enter title of book';
    message.style.color = 'tomato';
    message.style.fontWeight = 'bold';
    e.preventDefault();
  } else if (author.value === '') {
    message.innerHTML = 'Please enter author of book';
    message.style.color = 'tomato';
    message.style.fontWeight = 'bold';
    e.preventDefault();
  } else {
    const myBook = new NewBooks(title.value, author.value);
    myBook.newData();
    title.value = '';
    author.value = '';
    message.innerHTML = '';
  }
};

selectLi.addEventListener('click', (e) => {
  if (e.target.innerHTML === 'List') {
    fetchData(displayBooks);
    addForm.style.display = 'none';
    contactInfo.style.display = 'none';
    listList.style.display = 'block';
  }
  if (e.target.innerHTML === 'Add New') {
    addForm.style.display = 'block';
    contactInfo.style.display = 'none';
    listList.style.display = 'none';
  }
  if (e.target.innerHTML === 'Contact') {
    addForm.style.display = 'none';
    contactInfo.style.display = 'block';
    listList.style.display = 'none';
  }
});

document.querySelector('body').onload = fetchData(displayBooks);

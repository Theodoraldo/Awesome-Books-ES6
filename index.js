import Books from './modules/data.js';
import * as dateTime from './modules/luxon.js';

const ourLocalDate = document.querySelector('.ourLocalDate');
ourLocalDate.innerHTML = `${dateTime.localDate} ${dateTime.hour}:${dateTime.min}`;

const book = new Books();

book.addBooks();
book.fetchBooks();

const selectLi = document.querySelector('.menu__items');
const addForm = document.querySelector('.add-form');
const contactInfo = document.querySelector('.contact-info');
const listList = document.querySelector('.list-list');

selectLi.addEventListener('click', (e) => {
  if (e.target.innerHTML === 'List') {
    book.fetchBooks();
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
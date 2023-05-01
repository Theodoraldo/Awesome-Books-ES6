// books.js
export class NewBooks {
  constructor(BookTitle, BookAuthor) {
    this.btitle = BookTitle;
    this.bauthor = BookAuthor;
  }

  newData = () => {
    const Books = {
      title: this.btitle,
      author: this.bauthor,
    };
    let dataStore = JSON.parse(localStorage.getItem('Book List')) || [];
    dataStore.push(Books);
    localStorage.setItem('Book List', JSON.stringify(dataStore));
  }

  static removeitem = (index) => {
    let dataStore = JSON.parse(localStorage.getItem('Book List')) || [];
    dataStore.splice(index, 1);
    localStorage.setItem('Book List', JSON.stringify(dataStore));
  }
}

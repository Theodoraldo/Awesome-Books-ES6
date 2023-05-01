// data.js
export const fetchData = (displayBooks) => {
  // Data Storage into localStorage
  const dataStore = JSON.parse(localStorage.getItem('Book List'));

  // Fetching data from localStorage
  const createBooks = (items) => {
    let books = '';
    for (let i = 0; i < items.length; i += 1) {
      books += `
        <div class='displayRow'>
          <ul>
            <li>"${items[i].title}" by ${items[i].author}</li>
          </ul>
          <button class='remove' onclick='removeitem(${i})'>Remove</button>
        </div>
        <hr class="divider"/>
        `;
    }
    return books;
  };

  displayBooks.innerHTML = `
    ${createBooks(dataStore)}
  `;
};

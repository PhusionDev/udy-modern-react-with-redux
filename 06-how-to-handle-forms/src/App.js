import React, { useState } from 'react';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const newId = Math.round(Math.random() * 10000);
    setBooks([...books, { id: newId, title }]);
  };

  const deleteBookById = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className='app'>
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;

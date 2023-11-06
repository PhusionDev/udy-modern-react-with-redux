import React, { useState } from 'react';

import BookCreate from './components/BookCreate';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const newId = Math.round(Math.random() * 10000);
    setBooks([...books, { id: newId, title }]);
  };

  return (
    <div>
      {books.length}
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;

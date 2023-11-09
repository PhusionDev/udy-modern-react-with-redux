import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import BooksContext from './context/books';

import App from './App';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BooksContext.Provider value={5}>
    <App />
  </BooksContext.Provider>
);

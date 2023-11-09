import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { Provider } from './context/books';

import App from './App';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <Provider>
    <App />
  </Provider>
);

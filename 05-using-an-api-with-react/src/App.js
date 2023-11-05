import React from 'react';

import SearchBar from './components/SearchBar';
import searchImages from './api';

function App() {
  const handleSubmit = (term) => {
    searchImages(term);
  };

  return <SearchBar onSubmit={handleSubmit} />;
}

export default App;

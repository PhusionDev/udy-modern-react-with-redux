import React from 'react';

import SearchBar from './components/SearchBar';
import searchImages from './api';

function App() {
  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    console.log(result);
  };

  return <SearchBar onSubmit={handleSubmit} />;
}

export default App;

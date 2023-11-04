import React from 'react';

import SearchBar from './components/SearchBar';

function App() {
  const handleSubmit = (term) => {
    console.log(`Do a search with ${term}`);
    // searchImages(term);
  };

  return <SearchBar onSubmit={handleSubmit} />;
}

export default App;

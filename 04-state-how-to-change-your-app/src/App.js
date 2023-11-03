import { useState } from 'react';

import AnimalShow from './AnimalShow';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className='card'>
      <button onClick={handleClick}>Add Animal</button>
      <div>Animal Count: {count}</div>
    </div>
  );
}

export default App;

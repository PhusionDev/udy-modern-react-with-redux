import AnimalShow from './AnimalShow';

function App() {
  const handleClick = () => {
    console.log('Button was clicked!');
  };

  return (
    <div className='card'>
      <button onClick={handleClick}>Add Animal</button>
    </div>
  );
}

export default App;

import React from 'react';

import Button from './Button';
import { GoBell, GoDownload, GoDatabase } from 'react-icons/go';

function App() {
  const handleClick = () => {
    console.log('Clicked!');
  };

  return (
    <div>
      <div>
        <Button success rounded outline className='mb-5' onClick={handleClick}>
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoDownload />
          Buy Now
        </Button>
      </div>
      <div>
        <Button danger>See Ads</Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Hamburger
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Cheese
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Test 2
        </Button>
      </div>
    </div>
  );
}

export default App;

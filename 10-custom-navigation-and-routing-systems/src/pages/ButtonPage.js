import React from 'react';
import { GoBell, GoDownload, GoDatabase } from 'react-icons/go';

import Button from '../components/Button';

function ButtonPage() {
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

export default ButtonPage;

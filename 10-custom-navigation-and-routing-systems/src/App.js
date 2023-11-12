import React from 'react';

import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now
        </Button>
      </div>
      <div>
        <Button danger>See Ads</Button>
      </div>
      <div>
        <Button warning>Hamburger</Button>
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

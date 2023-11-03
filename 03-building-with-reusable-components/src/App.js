import 'bulma/css/bulma.min.css';

import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>
      <h1>Personal Digital Assistants</h1>
      <ProfileCard title='Alexa' handle='@alexa99' image={AlexaImage} />
      <ProfileCard title='Cortana' handle='@cortana32' image={CortanaImage} />
      <ProfileCard title='Siri' handle='@siri199' image={SiriImage} />
    </div>
  );
}

export default App;

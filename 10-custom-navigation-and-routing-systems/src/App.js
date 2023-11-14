import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: '1231-21321',
      label: 'can I use react on a project',
      content: 'yes you can use react on a project',
    },
    {
      id: '26243-233',
      label: 'javascript',
      content: 'hello america how are you',
    },
    { id: '383829-23992', label: 'css', content: 'sure thing css is good' },
  ];

  return <Accordion items={items} />;
}

export default App;

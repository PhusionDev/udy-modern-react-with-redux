import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      label: 'can I use react on a project',
      content: 'yes you can use react on a project',
    },
    { label: 'javascript', content: 'hello america how are you' },
    { label: 'css', content: 'sure thing css is good' },
  ];

  return <Accordion items={items} />;
}

export default App;

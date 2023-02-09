import './style.css';
import { useState } from 'react'
import TomatoCountBox from './components/TomoCountBox';
import ButtonsContainer from './components/ButtonsContainer';

function App() {
  const [tomatoCount, setTomatoCount] = useState(0);


  return (
    <div className="App">
      <h2>Tomato Counter</h2>
      <TomatoCountBox tomatoCount={tomatoCount} />
      <ButtonsContainer tomatoCount={tomatoCount} setTomatoCount={setTomatoCount} />
    </div>
  );
}

export default App;

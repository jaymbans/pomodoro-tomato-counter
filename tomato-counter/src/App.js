import './style.css';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Tomato Counter</h1>
      {count}
      <div className="buttons-container">
        <button className="btn">-</button>
        <button className="btn">+</button>
      </div>
    </div>
  );
}

export default App;

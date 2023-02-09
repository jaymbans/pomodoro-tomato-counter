import './style.css';
import { useState } from 'react'

function App() {
  const [tomatoCount, setTomatoCount] = useState(0);

  const increaseCount = () => setTomatoCount(tomatoCount + 1);
  const decreaseCount = () => setTomatoCount(tomatoCount - 1);

  return (
    <div className="App">
      <h2>Tomato Counter</h2>
      <h1>{tomatoCount > 0 ? "🍅".repeat(tomatoCount) : `Current Count is ${tomatoCount} tomatoes`}</h1>
      <div className="buttons-container">
        <button onClick={decreaseCount} className="btn">-</button>
        <button onClick={increaseCount} className="btn">+</button>
      </div>
    </div>
  );
}

export default App;

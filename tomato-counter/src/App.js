import './style.css';
import { useState } from 'react'
import TomatoCountBox from './components/TomoCountBox';
import ButtonsContainer from './components/ButtonsContainer';

function App() {

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const [tomatoCount, setTomatoCount] = useState(0);

  const daysTomatoCount = {};
  for (let day of daysOfWeek) {
    daysTomatoCount[day] = 0;
  }

  const [activeDay, setActiveDay] = useState('Mon')
  const [allTomatoes, setAllTomatoes] = useState(daysTomatoCount);

  return (
    <div className="App">
      <h2>Tomato Counter</h2>
      <ButtonsContainer allTomatoes={allTomatoes} setAllTomatoes={setAllTomatoes} activeDay={activeDay} />
      {daysOfWeek.map(day => {

        return (
          <div className='tomato-counter-container' key={day}>
            <h3
              onClick={() => setActiveDay(day)}
              style={activeDay === day ? { color: 'black' } : { color: 'gray' }}>
              {day}
            </h3>
            <TomatoCountBox
              day={day}
              allTomatoes={allTomatoes}
            />
          </div>
        )

      })}

    </div>
  );
}

export default App;

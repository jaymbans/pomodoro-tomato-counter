export default function ButtonsContainer({ allTomatoes, setAllTomatoes, activeDay }) {
  const increaseCount = () => {
    return setAllTomatoes({ ...allTomatoes, [activeDay]: allTomatoes[activeDay] + 1 })
  }
  const decreaseCount = () => {
    if (allTomatoes[activeDay] === 0) {
      return;
    }

    return setAllTomatoes({ ...allTomatoes, [activeDay]: allTomatoes[activeDay] - 1 });
  }

  return (
    <div className="buttons-container">
      <button onClick={decreaseCount} className="btn">-</button>
      <button onClick={increaseCount} className="btn">+</button>
    </div>
  )
}
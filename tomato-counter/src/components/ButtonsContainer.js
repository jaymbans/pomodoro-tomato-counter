export default function ButtonsContainer({ tomatoCount, setTomatoCount }) {
  const increaseCount = () => setTomatoCount(tomatoCount + 1);
  const decreaseCount = () => setTomatoCount(tomatoCount - 1);

  return (
    <div className="buttons-container">
      <button onClick={decreaseCount} className="btn">-</button>
      <button onClick={increaseCount} className="btn">+</button>
    </div>
  )
}
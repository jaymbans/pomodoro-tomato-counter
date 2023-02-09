export default function TomatoCountBox({ tomatoCount }) {

  return (
    <div className="tomato-count-box">
      <h1>{tomatoCount > 0 ? "🍅".repeat(tomatoCount) : `Current Count is ${tomatoCount} tomatoes`}</h1>
    </div>
  )
}
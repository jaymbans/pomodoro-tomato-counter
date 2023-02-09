export default function TomatoCountBox({ allTomatoes, day }) {
  return (
    <div className="tomato-count-box">
      <p>{"🍅".repeat(allTomatoes[day])}</p>
    </div>
  )
}
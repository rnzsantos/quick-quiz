import "../css/GameDetails.css"

export default function GameDetails(props) {
  const darkMode = props.darkMode ? "" : "light"
  const { category, categoryName, difficulty } = props.gameSettings

  return (
    <section className={`${darkMode} game-details`}>
      <strong>CATEGORY & DIFFICULTY</strong>
      <div>
        <i>{category ? categoryName : "Any Category"}</i>
        <hr />
        <i>{difficulty ? difficulty : "Any Difficulty"}</i>
      </div>
    </section>
  )
}

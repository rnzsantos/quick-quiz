import Settings from "./Settings"

export default function Menu(props) {
  return (
    <section className="menu">
      <span className="menu__text">Test Your Knowledge</span>

      <Settings
        gameSettings={props.gameSettings}
        updateGameSettings={props.updateGameSettings}
      />

      <button className="menu__start-btn" onClick={props.startGame}>
        Start Quiz
      </button>
    </section>
  )
}

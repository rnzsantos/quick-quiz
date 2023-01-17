import Settings from "./Settings"
import "../css/Menu.css"

export default function Menu(props) {
  const darkMode = props.darkMode ? "" : "dark"

  return (
    <section className="menu">
      <h2 className={`${darkMode} menu__title`}>Test Your Knowledge</h2>

      <Settings
        gameSettings={props.gameSettings}
        updateGameSettings={props.updateGameSettings}
      />

      <button className="menu__btn" onClick={props.startGame}>
        Start Quiz
      </button>
    </section>
  )
}

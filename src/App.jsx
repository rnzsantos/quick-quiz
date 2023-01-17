import { useEffect, useState } from "react"
import Menu from "./components/Menu"
import Main from "./components/Main"
import blobTop from "./assets/blob-top.png"
import blobBottom from "./assets/blob-bottom.png"
import "./App.css"

function App() {
  const [darkMode, setDarkMode] = useState(() => true)
  const [gameSettings, setGameSettings] = useState(() => createGameSettings())
  const [isGameStarted, setIsGameStarted] = useState(() => false)

  useEffect(() => {
    document.body.style.background = darkMode ? "#222831" : "#F9F9F9"
  }, [darkMode])

  function handleDarkMode() {
    setDarkMode(prevState => !prevState)
  }

  function createGameSettings() {
    return { category: "", categoryName: "", difficulty: "" }
  }

  function updateGameSettings(settings) {
    setGameSettings(prevState => ({
      ...prevState,
      [settings.name]: settings.value,
      categoryName: settings.text,
    }))
  }

  function startGame() {
    setIsGameStarted(true)
  }

  function returnToMenu() {
    setGameSettings(createGameSettings())
    setIsGameStarted(false)
  }

  return (
    <>
      <img className="blob blob--top" src={blobTop} alt="blob" />

      <header>
        <div className="container">
          <h1 className="header__title">QUICK QUIZ</h1>
          <i
            className={`mode fa-regular fa-${darkMode ? "moon" : "sun"} fa-xl`}
            onClick={handleDarkMode}></i>
        </div>
      </header>

      <main>
        <div className="container">
          {isGameStarted ? (
            <Main
              darkMode={darkMode}
              gameSettings={gameSettings}
              returnToMenu={returnToMenu}
            />
          ) : (
            <Menu
              darkMode={darkMode}
              gameSettings={gameSettings}
              updateGameSettings={updateGameSettings}
              startGame={startGame}
            />
          )}
        </div>
      </main>

      <footer>
        <div className="container">
          <small>
            Developed by {""}
            <a href="https://github.com/rnzsantos" target="_blank">
              Renzo
            </a>
          </small>
        </div>
      </footer>

      <img className="blob blob--bottom" src={blobBottom} alt="blob" />
    </>
  )
}

export default App

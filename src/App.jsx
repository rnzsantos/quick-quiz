import { useState } from "react"
import Menu from "./components/Menu"
import Main from "./components/Main"
import blobTop from "./assets/blob-top.png"
import blobBottom from "./assets/blob-bottom.png"
import "./App.css"

function App() {
  const [gameSettings, setGameSettings] = useState(() => createGameSettings())
  const [isGameStarted, setIsGameStarted] = useState(() => false)

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
          <h1>QUICK QUIZ</h1>
        </div>
      </header>

      <main>
        <div className="container">
          {isGameStarted ? (
            <Main gameSettings={gameSettings} returnToMenu={returnToMenu} />
          ) : (
            <Menu
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

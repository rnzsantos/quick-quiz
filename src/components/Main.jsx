import { nanoid } from "nanoid"
import { useState, useEffect } from "react"
import GameDetails from "./GameDetails"
import QuestionList from "./QuestionList"

export default function Main(props) {
  const [questions, setQuestions] = useState(() => [])
  const [newGame, setNewGame] = useState(() => 0)

  useEffect(() => {
    async function getQuestions() {
      const response = await fetch(`
        https://opentdb.com/api.php?
        amount=5&
        category=${props.gameSettings.category}&
        difficulty=${props.gameSettings.difficulty}&
        type=multiple`)
      const data = await response.json()
      setQuestions(data.results.map(question => createQuestion(question)))
    }
    getQuestions()
  }, [newGame])

  function createQuestion(data) {
    const { question, correct_answer, incorrect_answers } = data
    return {
      id: nanoid(),
      question,
      choices: [correct_answer, ...incorrect_answers],
      answer: correct_answer,
      selected: "",
      show: false,
    }
  }

  function handleClick(id, choice) {
    setQuestions(prevState =>
      prevState.map(question =>
        id === question.id ? { ...question, selected: choice } : question
      )
    )
  }

  function showAnswers() {
    setQuestions(prevState =>
      prevState.map(question => ({ ...question, show: true }))
    )
  }

  function startNewGame() {
    setNewGame(prevState => prevState + 1)
  }

  return (
    <>
      {questions.length > 0 && (
        <>
          <GameDetails gameSettings={props.gameSettings} />

          <QuestionList
            returnToMenu={props.returnToMenu}
            questions={questions}
            handleClick={handleClick}
            showAnswers={showAnswers}
            startNewGame={startNewGame}
          />
        </>
      )}
    </>
  )
}

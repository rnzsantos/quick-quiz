import { useState, useEffect } from "react"
import Question from "./Question"
import "../css/QuestionList.css"

export default function QuestionList(props) {
  const [correctAnswers, setCorrectAnswers] = useState(() => 0)
  const [isDisabled, setIsDisabled] = useState(() => true)

  useEffect(() => {
    const total = props.questions.filter(
      question => question.selected === question.answer
    ).length
    setCorrectAnswers(total)
  }, [props.questions])

  useEffect(() => {
    if (
      props.questions.length &&
      props.questions.every(question => question.selected)
    )
      setIsDisabled(false)
  }, [props.questions])

  function startNewGame() {
    setIsDisabled(true)
    props.startNewGame()
  }

  const questionElement = props.questions.map(question => (
    <Question
      key={question.id}
      darkMode={props.darkMode}
      {...question}
      handleClick={props.handleClick}
    />
  ))

  const darkMode = props.darkMode ? "" : "dark"
  const show = props.questions[0].show
  const style = isDisabled && "questions__btn--disabled"

  return (
    <section className="question-list">
      <div className="questions">{questionElement}</div>

      {show && (
        <span className="score-text">
          You scored {correctAnswers}/5 correct answers
        </span>
      )}

      <div className="buttons">
        <button
          className={`questions__btn questions__btn--primary ${style}`}
          onClick={show ? startNewGame : props.showAnswers}>
          {show ? "Play Again" : "Check Answers"}
        </button>

        {show && (
          <button
            className={`${darkMode} questions__btn questions__btn--secondary ${style}`}
            onClick={props.returnToMenu}>
            Menu
          </button>
        )}
      </div>
    </section>
  )
}

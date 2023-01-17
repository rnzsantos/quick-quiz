import { nanoid } from "nanoid"
import { decode } from "html-entities"
import check from "../assets/check.png"
import cross from "../assets/cross.png"

export default function Question(props) {
  const choicesElement = props.choices.sort().map(choice => {
    const id = props.show
      ? choice === props.answer
        ? "correct"
        : choice === props.selected
        ? "wrong"
        : "others"
      : ""

    const style = choice === props.selected && "question__choice--selected"

    return (
      <div
        className={`question__choice ${style}`}
        key={nanoid()}
        id={id}
        onClick={() => props.handleClick(props.id, choice)}>
        {decode(choice)}
      </div>
    )
  })

  const darkMode = props.darkMode ? "" : "dark"

  return (
    <>
      <div className="question">
        <div className="question__content">
          <p className={`${darkMode} question__text`}>
            {decode(props.question)}
          </p>
          {props.show && (
            <img
              className="question__icon"
              src={props.selected === props.answer ? check : cross}
              alt=""
            />
          )}
        </div>
        <div className="question__choices">{choicesElement}</div>
      </div>
      <hr />
    </>
  )
}

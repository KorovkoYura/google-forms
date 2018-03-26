import React, { Component } from 'react'
import Question from './Question'

class QuestionsList extends Component {
  render() {
    const {
      questions,
      updateQuestion,
      deleteQuestion,
      addOption,
      deleteOption
    } = this.props

    return (
      <div>
        {
          questions.map((q, index) => {
            return (
              <Question
                key={index}
                question={q}
                updateQuestion={updateQuestion}
                deleteQuestion={deleteQuestion}
                addOption={addOption}
                deleteOption={deleteOption}
              />
            )
          })
        }
      </div>
    )
  }
}

export default QuestionsList

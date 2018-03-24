import React, { Component } from 'react'
import FormItem from './FormItem'

class FormItemList extends Component {
  render() {
    const { questions, addOption, updateQuestion } = this.props

    return (
      <div>
        {
          questions.map((q, index) => {
            return (
              <FormItem
                key={index}
                question={q}
                updateQuestion={updateQuestion}
                addOption={addOption}
              />
            )
          })
        }
      </div>
    )
  }
}

export default FormItemList

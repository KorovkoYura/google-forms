import React, { Component } from 'react'
import { Paper, TextField, Button, IconButton, Tooltip } from 'material-ui'
import DeleteIcon from 'material-ui-icons/Delete';
import FormTypeMenu from './FormTypeMenu'
import List from './options/List'
import DropDownList from './options/DropDownList'

class Question extends Component {
  state = {
    question: null,
    count: 1
  }

  componentWillMount() {
    this.setState({
      question: this.props.question
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      question: nextProps.question
    })
  }

  updateQuestion = question => {
    this.props.updateQuestion(question)
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      question: {
        ...this.state.question,
        [name]: value
      }
    }, () => this.updateQuestion(this.state.question))
  }

  handleOptionChange = (option, event) => {
    let options = this.state.question.options
    const index = options.findIndex(q => q.id === option.id)
    const data = {
      ...option,
      value: event.target.value
    }
    options.splice(index, 1)
    options.splice(index, 0, data)
    this.setState({
      question: {
        ...this.state.question,
        options: [
          ...options
        ]
      }
    }, () => this.updateQuestion(this.state.question))
  }

  handleMenuChange = type => {
    let options
    type === 'text' ? options = [] : options = this.state.question.options

    this.setState({
      question: {
        ...this.state.question,
        type,
        options
      }
    }, () => this.updateQuestion(this.state.question))
  }

  deleteOption = (questionID = this.state.question.id, optionID) => {
    this.props.deleteOption(questionID, optionID)
  }

  render() {
    const { addOption, deleteQuestion } = this.props
    const { question: { id, type, title, description, options }, count } = this.state

    return (
      <Paper style={{marginTop: 50, padding: 25}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <TextField
            style={{width: '50%'}}
            margin="normal"
            value={title}
            placeholder="Вопрос"
            onChange={this.handleChange('title')}
          />

        <FormTypeMenu handleMenuChange={this.handleMenuChange} type={type} />

        </div>
        <div>
          <TextField
              margin="normal"
              value={description}
              placeholder="Описание"
              onChange={this.handleChange('description')}
              fullWidth
          />
        </div>
          {
             type === 'list' &&
              <List
                options={options}
                deleteOption={this.deleteOption}
                handleOptionChange={this.handleOptionChange}
              />
            }
            {
              type === 'dropDownList' &&
                <DropDownList
                  options={options}
                  deleteOption={this.deleteOption}
                  handleOptionChange={this.handleOptionChange}
                />
            }
            {
              type !== 'text' &&
                <Button
                  style={{marginTop: 30}}
                  onClick={() => {
                    addOption(id, {id: Date.now(), value: `Вариант ${count}`})
                    this.setState({
                      count: this.state.count + 1
                    })
                  }}>
                  Добавить вариант
                </Button>
            }
            <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: 20}}>
              <Tooltip id="tooltip-icon" title="Delete">
                <IconButton color="secondary" aria-label="Delete" onClick={() => deleteQuestion(id)}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </div>
      </Paper>
    )
  }
}

export default Question

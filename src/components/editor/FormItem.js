import React, { Component } from 'react'
import { Paper, TextField } from 'material-ui'
import FormTypeMenu from './FormTypeMenu'
import List from './options/List'
import DropDownList from './options/DropDownList'

class FormItem extends Component {
  state = {
    question: null
  }

  componentWillMount() {
    this.setState({
      question: this.props.question
    })
  }

  componentWillUpdate(nextProps, nextState) {
    // this.props.updateQuestion(nextState.question)
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      question: {
        ...this.state.question,
        [name]: value
      }
    },   this.props.updateQuestion(this.state.question))
  }

  handleMenuChange = type => {
    this.setState({
      question: {
        ...this.state.question,
        type
      }
    })
  }

  render() {
    const { question, addOption } = this.props
    const { question: { type, title, description, options } } = this.state

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

        <FormTypeMenu handleMenuChange={this.handleMenuChange} />

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
                type={type}
                options={options}
                addOption={this.addOption}
                handleOptionChange={this.handleOptionChange}
              />
            }
            {
              type === 'dropDownList' &&
              <DropDownList
                options={options}
                addOption={this.addOption}
                handleOptionChange={this.handleOptionChange}
              />
            }
      </Paper>
    )
  }
}

export default FormItem

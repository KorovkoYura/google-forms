import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addQuestion, updateForm, addOption } from '../actions/formEditor'
import Header from '../components/Header'
import FormHeader from '../components/editor/FormHeader'
import FormItemList from '../components/editor/FormItemList'

import { Paper, Button } from 'material-ui'
import AddIcon from 'material-ui-icons/Add';

import { TextField, IconButton } from 'material-ui'
import { Save } from 'material-ui-icons'

class FormEditor extends Component {
  state = {
    form: null
  }

  componentWillMount() {
    const { id } = this.props.match.params
    let form = this.props.forms.filter(form => form.id == id)
    form = form[0]

    this.setState({
      form
    })
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    })
  }

  insertQusetion = question => {
    
  }

  updateQuestion = question => {
    console.log(question)
    // const questions = this.state.form.questions.slice()
    // const index = questions.findIndex(q => q.id == question.id)
    //
    // questions.splice(index, 1)
    // questions.splice(index, 0, question)

    // console.log('as', questions)
    // console.log('questions', this.state.form.questions)

    // this.setState({
    //   form: {
    //     ...this.state.form,
    //     questions
    //   }
    // })
  }

  updateForm = form => {
    this.props.updateForm(form)
    this.props.history.push('/forms')
  }

  addQuestion = (form, question) => {
    this.props.addQuestion(form, question)
  }

  render() {
    const { form: { id, title, description, questions } } = this.state
    console.log(this.state)

    return (
      <div>
        <Header />
        <div style={{width: '70%', margin: 'auto', marginTop: 100}}>
          <IconButton onClick={this.updateForm.bind({}, this.state.form)}>
            <Save />
          </IconButton>
          <Paper style={{padding: '5em', position: 'relative'}}>

            <FormHeader
              title={title}
              description={description}
              handleChange={this.handleChange}
              updateForm={this.updateForm}
            />

            <FormItemList
              questions={questions}
              updateQuestion={this.updateQuestion}
              addOption={this.props.addOption}
            />

              <div  style={{marginTop: 50}}>
                <Button variant="fab" color="primary" aria-label="add" onClick={this.addQuestion.bind({}, this.state.form, {id: Date.now(), type: 'text', title: '', description: '', options: []})}>
                  <AddIcon />
                </Button>
              </div>

          </Paper>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    forms: state.formsReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addQuestion: (form, question) => {
      dispatch(addQuestion(form, question))
    },
    updateForm: form => {
      dispatch(updateForm(form))
    },
    addOption: option => {
      dispatch(addOption(option))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormEditor)

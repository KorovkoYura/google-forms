import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addQuestion, updateQuestion, deleteQuestion, addOption, deleteOption } from '../actions/questions'
import { updateForm } from '../actions/forms'
import EditorHeader from '../components/editor/EditorHeader'
import FormHeader from '../components/editor/FormHeader'
import QuestionsList from '../components/editor/QuestionsList'
import { Paper, Button, Tooltip } from 'material-ui'
import AddIcon from 'material-ui-icons/Add'

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

  updateForm = form => {
    this.props.updateForm(form)
    this.props.history.push('/forms')
  }

  addQuestion = (formID, question) => {
    this.props.addQuestion(formID, question)
  }

  render() {
    const { form: { id, title, description } } = this.state
    const { questions } = this.props
    const data = questions.filter(q => q.formID === id)

    return (
      <div>
        <EditorHeader
          onClick={() => this.props.history.push('/forms')}
          updateForm={this.updateForm}
          form={this.state.form}
        />
      <div style={{width: '70%', margin: '50px auto'}}>
          <Paper style={{padding: '5em', position: 'relative'}}>

            <FormHeader
              title={title}
              description={description}
              handleChange={this.handleChange}
            />

          <QuestionsList
              questions={data}
              updateQuestion={this.props.updateQuestion}
              deleteQuestion={this.props.deleteQuestion}
              addOption={this.props.addOption}
              deleteOption={this.props.deleteOption}
            />

          <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
            <Tooltip id="tooltip-icon" title="Add">
              <Button variant="fab" color="primary" aria-label="add" onClick={this.addQuestion.bind({}, id, {id: Date.now(), type: 'text', title: 'Вопрос без заголовка', description: '', options: []})}>
                <AddIcon />
              </Button>
            </Tooltip>
          </div>

          </Paper>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    forms: state.forms,
    questions: state.questions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addQuestion: (formID, question) => {
      dispatch(addQuestion(formID, question))
    },
    updateQuestion: question => {
      dispatch(updateQuestion(question))
    },
    deleteQuestion: id => {
      dispatch(deleteQuestion(id))
    },
    updateForm: form => {
      dispatch(updateForm(form))
    },
    addOption: ( questionID, option) => {
      dispatch(addOption(questionID, option))
    },
    deleteOption: (questionID, optionID) => {
      dispatch(deleteOption(questionID, optionID))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormEditor)

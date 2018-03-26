import * as actions from '../constants'
import { bake_cookie, read_cookie } from 'sfcookies'

const cookie = read_cookie('questions')

let initialState
if (cookie.length < 1) {
  initialState = []
} else {
  initialState = cookie
}

const questionReducer = (state = initialState, action) => {
  let data = null
  let question = {}

  switch (action.type) {
    case actions.ADD_QUESTION:
      const formID = action.payload.id
      question = {
        ...action.payload.question,
        formID
      }
      data = [
        ...state,
        question
      ]
      bake_cookie('questions', data)
      return data
    case actions.DELETE_FORM:
      data = removeQuestionsById(state, action.id)
      bake_cookie('questions', data)
      return data
    case actions.UPDATE_QUESTION:
      data = updateQuestion(state, action.question)
      bake_cookie('questions', data)
      return data
    case actions.DELETE_QUESTION:
      let index = state.findIndex(q => q.id === action.id)
      data = state.slice()
      data.splice(index, 1)
      bake_cookie('questions', data)
      return data
    case actions.ADD_OPTION:
      question = getQuestion(state, action.payload.id)
      question.options.push(action.payload.option)
      data = updateQuestion(state, question)
      bake_cookie('questions', data)
      return data
    case actions.DELETE_OPTION:
      question = getQuestion(state, action.payload.questionID)
      let options = question.options.filter(o => o.id !== action.payload.optionID)
      question.options = options
      data = updateQuestion(state, question)
      bake_cookie('questions', data)
      return data
    default:
      return state
  }
}

const updateQuestion = (state, action) => {
  let index = state.findIndex(f => f.id === action.id)
  let data = state.slice()
  data.splice(index, 1)
  data.splice(index, 0, action)
  return data
}

const getQuestion = (state, id) => {
  let index = state.findIndex(q => q.id === id)
  return state[index]
}

const removeQuestionsById = (state = [], formID) => {
  const questions = state.filter(q => q.formID !== formID)
  return questions
}

export default questionReducer

import * as actions from '../constants'
import { bake_cookie, read_cookie } from 'sfcookies'

const cookie = read_cookie('forms')

let initialState
if (cookie.length < 1) {
  initialState = []
} else {
  initialState = cookie
}

const formReducer = (state = initialState, action) => {
  let data = []

  switch(action.type) {
    case actions.ADD_FORM:
      data = [
        ...state,
        createForm(action.payload)
      ]
      bake_cookie('forms', data)
      return data
    case actions.UPDATE_FORM:
      let index = state.findIndex(f => f.id === action.form.id)
      data = state.slice()
      data.splice(index, 1)
      data.splice(index, 0, action.form )
      bake_cookie('forms', data)
      return data
    case actions.DELETE_FORM:
      data = removeFormById(state, action.id)
      bake_cookie('forms', data)
      return data
    default:
      return state
  }
}

const createForm = action => {
  const { id, title, description, questions } = action
  return {
    id,
    title,
    description,
    questions
  }
}

const removeFormById = (state = [], id) => {
	const forms = state.filter(form => form.id !== id);
	return forms
}

export default formReducer

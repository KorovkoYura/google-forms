import * as actions from '../constants'
import { bake_cookie, read_cookie } from 'sfcookies'

const createForm = action => {
  let { id, title, description, questions } = action
  return {
    id,
    title,
    description,
    questions
  }
}

const removeById = (state = [], id) => {
	const forms = state.filter(form => form.id !== id);
	return forms
}

const formsReducer = (state = [], action) => {
  let forms = state
  state = read_cookie('forms')

  switch(action.type) {
    case actions.ADD_FORM:
      console.log('ADD_FORM action was dispatched')
      forms = [
        ...state,
        createForm(action)
      ]
      bake_cookie('forms', forms)
      return forms
    case actions.DELETE_FORM:
      console.log('DELETE_FORM action was dispatched')
      forms = removeById(state, action.id)
      bake_cookie('forms', forms)
      return forms
    default:
      return state;
  }
}

export default formsReducer

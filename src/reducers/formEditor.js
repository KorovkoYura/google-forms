import * as actions from '../constants'
import { bake_cookie, read_cookie } from 'sfcookies'

const updateForm = (state, form) => {
  const newState = state.filter(s => s.id !== form.id)
  return  [
    ...newState,
    form
  ]
}

const formEditorReducer = (state = [], action) => {
  let forms = null
  state = read_cookie('forms')

    switch(action.type) {
      case actions.ADD_QUESTION:
        console.log('ADD_QUESTION action was dispatched')
        forms = state.filter(s => s.id !== action.id)
        let form = action.form
        form.questions.push(action.question)
        bake_cookie('forms', forms)
        return [
          ...forms,
          form
        ]
      case actions.UPDATE_FORM:
        forms = updateForm(state, action.form)
        bake_cookie('forms', forms)
        return forms
      case actions.ADD_OPTION:
        console.log('ADD_OPTION was dispatched')
        return state
      default:
        return state
    }
}

export default formEditorReducer

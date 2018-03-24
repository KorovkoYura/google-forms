import * as actions from '../constants'

export const addQuestion = (form, question) => {
  return {
    type: actions.ADD_QUESTION,
    form,
    question
  }
}

export const updateForm = form => {
  return {
    type: actions.UPDATE_FORM,
    form
  }
}

export const addOption = option => {
  return {
    type: actions.ADD_OPTION,
    option
  }
}

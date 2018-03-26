import * as actions from '../constants'

export const addQuestion = (formID, question) => {
  return {
    type: actions.ADD_QUESTION,
    payload: {
      id: formID,
      question
    }
  }
}

export const updateQuestion = question => {
  return {
    type: actions.UPDATE_QUESTION,
    question
  }
}

export const deleteQuestion = id => {
  return {
    type: actions.DELETE_QUESTION,
    id
  }
}

export const addOption = (questionID, option) => {
  return {
    type: actions.ADD_OPTION,
    payload: {
      id: questionID,
      option
    }
  }
}

export const updateOption = (questionID, option) => {
  return {
    type: actions.UPDATE_OPTION,
    payload: {
      questionID,
      option
    }
  }
}

export const deleteOption = (questionID, optionID) => {
  return {
    type: actions.DELETE_OPTION,
    payload: {
      questionID,
      optionID
    }
  }
}

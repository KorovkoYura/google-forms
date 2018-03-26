import * as actions from '../constants'

export const addForm = id => {
  return {
    type: actions.ADD_FORM,
    payload: {
      id,
      title: 'New Form',
      description: '',
      questions: []
    }
  }
}

export const updateForm = form => {
  return {
    type: actions.UPDATE_FORM,
    form
  }
}

export const deleteForm = id => {
  return {
    type: actions.DELETE_FORM,
    id
  }
}

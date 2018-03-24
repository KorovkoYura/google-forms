import * as actions from '../constants'

export const addForm = id => {
  return {
    type: actions.ADD_FORM,
    id,
    title: 'New Form',
    description: '',
    questions: []
  }
}

export const deleteForm = id => {
  return {
    type: actions.DELETE_FORM,
    id
  }
}

import * as actions from '../constants'

export const addForm = id => {
  return {
    type: actions.ADD_FORM,
    payload: {
      id,
      title: 'Новая форма',
      description: '',
      date: Date.now(),
      dateModified: null
    }
  }
}

export const updateForm = form => {
  return {
    type: actions.UPDATE_FORM,
    form
  }
}

export const sortBy = value => {
  return {
    type: actions.SORT_BY,
    payload: value
  }
}

export const deleteForm = id => {
  return {
    type: actions.DELETE_FORM,
    id
  }
}

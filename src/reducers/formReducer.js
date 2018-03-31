import * as actions from '../constants'
import { bake_cookie, read_cookie } from 'sfcookies'

const createForm = action => {
  const { id, title, description, date } = action
  return {
    id,
    title,
    description,
    date
  }
}

const sortByName = state => {
  return state.sort((a, b) => {
    let nA = a.title.toLowerCase()
    let nB = b.title.toLowerCase()

    if(nA < nB)
      return -1
    else if(nA > nB)
      return 1
   return 0
  })
}

const sortByDate = state => {
    return state.sort((a, b) => {
      return new Date(a.date) - new Date(b.date)
    })
}

const sortByDateModified = state => {
  return state.sort((a, b) => {
    return new Date(b.dateModified) - new Date(a.dateModified)
  })
}

const removeFormById = (state = [], id) => {
	const forms = state.filter(form => form.id !== id)
	return forms
}

const cookie = read_cookie('forms')

let initialState
if (cookie.length < 1) {
  initialState = []
} else {
  initialState = sortByDateModified(cookie)
}

const formReducer = (state = initialState, action) => {
  let data = []

  switch(action.type) {
    case actions.ADD_FORM:
      data = [
        createForm(action.payload),
        ...state
      ]
      bake_cookie('forms', data)
      return data
    case actions.UPDATE_FORM:
      let index = state.findIndex(f => f.id === action.form.id)
      data = state.slice()
      data.splice(index, 1)
      data = [
        action.form,
        ...data
      ]
      // data.splice(index, 0, action.form )
      bake_cookie('forms', data)
      return data
    case actions.SORT_BY:
      data = state.slice()
      if(action.payload === 'sortByName') {
        data = sortByName(data)
      } else if (action.payload === 'sortByDate') {
        data = sortByDate(data)
      } else if (action.payload === 'sortByDateModified') {
        data = sortByDateModified(data)
      } else {
        return
      }
      return data
    case actions.DELETE_FORM:
      data = removeFormById(state, action.id)
      bake_cookie('forms', data)
      return data
    default:
      return state
  }
}

export default formReducer

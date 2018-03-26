import { combineReducers } from 'redux'
import forms from './formReducer'
import questions from './questionReducer'
import { routerReducer } from 'react-router-redux'

const reducer = combineReducers({
  forms,
  questions,
  router: routerReducer
})

export default reducer

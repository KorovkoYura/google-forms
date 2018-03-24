import { combineReducers } from 'redux';
import formsReducer from './forms';
import formEditorReducer from './formEditor';
import { routerReducer } from 'react-router-redux'

const Reducer = combineReducers({
  formsReducer,
  formEditorReducer,
  router: routerReducer
})

export default Reducer;

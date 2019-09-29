import { combineReducers } from 'redux';
import saveDocumentReducer from '../reducers/SaveDocumentReducer'

const AppReducers = combineReducers({
  saveDocument: saveDocumentReducer
})

export default AppReducers;
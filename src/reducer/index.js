import counterReducer from './counter';
import loggedReducer from './isLogged.js';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
});

export default allReducers;
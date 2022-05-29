import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import personReducer from './personReducer';

export default combineReducers({
  log: eventReducer,
  tech: personReducer,
});

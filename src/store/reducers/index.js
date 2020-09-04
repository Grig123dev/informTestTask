import {combineReducers} from "redux";
import datReducer from './dataReducer'
const rootReducers = combineReducers({
  data: datReducer
});

export default  rootReducers;

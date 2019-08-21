import { combineReducers } from "redux";
import { reduxTokenAuthReducer } from "redux-token-auth";
import flashMessageReducer from './flashMessageReducer'

const rootReducer = combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  flashes: flashMessageReducer
});

export default rootReducer;

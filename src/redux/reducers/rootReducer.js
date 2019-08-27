import { combineReducers } from "redux";
import { reduxTokenAuthReducer } from "redux-token-auth";
import flashMessageReducer from './flashMessageReducer'
import locationReducer from "./locationReducer";

const rootReducer = combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  flashes: flashMessageReducer,
  city: locationReducer
});

export default rootReducer;

import { combineReducers } from "redux";
import user from "./user_reducer";
import post from "./post_reducer";
import turn from "./turn_reducer";

const rootReducer = combineReducers({
  user,
  post,
  turn,
});

export default rootReducer;

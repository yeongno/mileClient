import { combineReducers } from "redux";
import user from "./user_reducer";
import post from "./post_reducer";
import turn from "./turn_reducer";
import reply from "./reply_reducer";

const rootReducer = combineReducers({
  user,
  post,
  turn,
  reply,
});

export default rootReducer;

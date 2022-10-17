import { REPLY_GET, REPLY_SET } from "../_actions/types";

export default function (state = {}, action){
  switch (action.type) {
    case REPLY_SET:
      return { ...state, setReply: action.payload };
      case REPLY_GET:
        return { ...state, getReply: action.payload };
    default:
      return state;
  }
}

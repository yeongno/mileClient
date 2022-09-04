import { TURNOFF_MENUBAR } from "../_actions/types";

export default function turn(state = {}, action) {
  switch (action.type) {
    case TURNOFF_MENUBAR:
      return { ...state, turnOff: action.value };
      break;
    default:
      return state;
  }
}

import { TURNOFF_MENUBAR, TURNOFF_SEARCH } from "../_actions/types";

export default function turn(state = {}, action) {
  switch (action.type) {
    case TURNOFF_MENUBAR:
      return { ...state, turnOffMenu: action.value };
    case TURNOFF_SEARCH:
      return { ...state, turnOffSearch: action.value };
      break;
    default:
      return state;
  }
}

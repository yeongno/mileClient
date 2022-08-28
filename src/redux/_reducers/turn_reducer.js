import { TURNOFF_SECTION, TURNON_SECTION } from "../_actions/types";

export default function turn(state = {}, action) {
  switch (action.type) {
    case TURNON_SECTION:
      return { ...state, turnOn: action.value };
      break;
    case TURNOFF_SECTION:
      return { ...state, turnOff: action.value };
      break;
    default:
      return state;
  }
}

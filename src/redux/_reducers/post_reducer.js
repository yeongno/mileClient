import {
  POSTNOTICE_GET,
  POST_GET,
  POST_GO,
  POST_ONEGET,
} from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case POST_GO:
      return { ...state, postSuc: action.payload };
      break;
    case POST_GET:
      return { ...state, postSuc: action.payload, posts: action.payload.posts };
      break;
    case POSTNOTICE_GET:
      return { ...state, postsNotice: action.payload.posts };
      break;
    case POST_ONEGET:
      return {
        ...state,
        postSuc: action.payload,
        postOne: action.payload.posts,
      };
      break;
    default:
      return state;
  }
}

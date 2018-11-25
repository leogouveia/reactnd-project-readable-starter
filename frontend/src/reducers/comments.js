import {
  COMMENTS_INVALIDATE,
  COMMENTS_REQUEST,
  COMMENTS_RECEIVE
} from "../actions/comments";

export default function comments(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: undefined
  },
  action
) {
  switch (action.type) {
    case COMMENTS_INVALIDATE:
      return { ...state, didInvalidate: true };
    case COMMENTS_REQUEST:
      return { ...state, isFetching: true };
    case COMMENTS_RECEIVE:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.comments,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}

import { INVALIDATE_REQUEST_COMMENTS, REQUEST_COMMENTS, RECEIVE_COMMENTS } from "../actions/comments";

export default function comments(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: undefined
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_REQUEST_COMMENTS:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_COMMENTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.comments,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}
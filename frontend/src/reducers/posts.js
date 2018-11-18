import {
  ADD_POST,
  RECEIVE_POSTS,
  INVALIDATE_REQUEST_POSTS,
  REQUEST_POSTS
} from "../actions/posts";

export default function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: undefined
  },
  action
) {
  switch (action.type) {
    case ADD_POST:
      const { post } = action;
      return {
        ...state,
        [action.post.id]: post
      };
    case INVALIDATE_REQUEST_POSTS:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}

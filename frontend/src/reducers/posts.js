import {
  POST_ADD,
  POSTS_RECEIVE,
  POSTS_INVALIDATE,
  POSTS_REQUEST,
  POSTS_FILTER
} from "../actions/posts";

const defaultPostsObject = {
  isFetching: false,
  didInvalidate: false,
  items: undefined
};
export default function posts(
  state = defaultPostsObject,
  action
) {
  switch (action.type) {
    case POST_ADD:
      const { post } = action;
      return {
        ...state,
        [action.post.id]: post
      };
    case POSTS_INVALIDATE:
      return { ...state, didInvalidate: true };
    case POSTS_REQUEST:
      return { ...state, isFetching: true, didInvalidate: false };
    case POSTS_RECEIVE:
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

export function filteredPosts(state = defaultPostsObject, action) {
  switch (action.type) {
    case POSTS_FILTER:
      return {
        ...state,
        items:
          Array.isArray(state.items) && action.category
            ? state.items.filter(i => i.category === action.category)
            : state.items
      };
    default:
      return state;
  }
}

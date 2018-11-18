import { INVALIDATE_REQUEST_CATEGORIES, REQUEST_CATEGORIES, RECEIVE_CATEGORIES } from "../actions/categories";

export default function categories(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: undefined
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_REQUEST_CATEGORIES:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_CATEGORIES:
     return Object.assign({}, state, {
       isFetching: true
     });
    case RECEIVE_CATEGORIES:
     return Object.assign({}, state, {
       isFetching: false,
       didInvalidate: false,
       items: action.categories,
       updatedAt: action.receivedAt
     })
    default:
      return state;
  }
}
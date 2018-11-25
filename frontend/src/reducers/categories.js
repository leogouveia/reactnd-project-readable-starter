import {
  CATEGORIES_REQUEST_INVALIDATE,
  CATEGORIES_REQUEST,
  CATEGORIES_RECEIVE,
  CATEGORIES_SELECT_CURRENT
} from "../actions/categories";

export default function categories(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: undefined,
    currentCategory: null
  },
  action
) {
  switch (action.type) {
    case CATEGORIES_REQUEST_INVALIDATE:
      return { ...state, didInvalidate: true };
    case CATEGORIES_REQUEST:
      return { ...state, isFetching: true };
    case CATEGORIES_SELECT_CURRENT:
      return { ...state, currentCategory: state.items.filter(i => i.id === action.categoryId)[0] }
    case CATEGORIES_RECEIVE:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.categories,
        updatedAt: action.receivedAt
      };
    default:
      return state;
  }
}

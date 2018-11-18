import { getCategories } from "../utils/API";

export const INVALIDATE_REQUEST_CATEGORIES = 'INVALIDATE_REQUEST_CATEGORIES';
export function invalidateRequestCategories() {
  return {
    type: INVALIDATE_REQUEST_CATEGORIES
  };
}

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
function requestCategories() {
  return {
    type: REQUEST_CATEGORIES
  }
}

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
    receivedAt: Date.now()
  }
}

function fetchCategories() {
  return dispatch => {
    dispatch(requestCategories);
    return getCategories()
      .then(categories => {
        dispatch(receiveCategories(categories));
      })
  }
}

function shouldFetchCategories(state) {
  const categories = state.items;
  if (!categories) {
    return true;
  } else if (state.isFetching) {
    return false;
  }
  return state.didInvalidate;
}

export function fetchCategoriesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchCategories(getState())) {
      return dispatch(fetchCategories());
    } 
    return Promise.resolve();
  }
}
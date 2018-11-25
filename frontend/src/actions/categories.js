import { getCategories } from "../utils/API";

export const CATEGORIES_REQUEST_INVALIDATE = 'CATEGORIES_REQUEST_INVALIDATE';
export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
export const CATEGORIES_RECEIVE = 'CATEGORIES_RECEIVE';
export const CATEGORIES_SELECT_CURRENT = 'CATEGORIES_SELECT_CURRENT'
export function invalidateRequestCategories() {
  return {
    type: CATEGORIES_REQUEST_INVALIDATE
  };
}

function requestCategories() {
  return {
    type: CATEGORIES_REQUEST
  }
}

function receiveCategories(categories) {
  return {
    type: CATEGORIES_RECEIVE,
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

export function handleFetchCategories() {
  return (dispatch, getState) => {
    if (shouldFetchCategories(getState())) {
      return dispatch(fetchCategories());
    } 
    return Promise.resolve();
  }
}

export function selectCurrentCategory(categoryId) {
  return {
    type: CATEGORIES_SELECT_CURRENT,
    categoryId
  }
}
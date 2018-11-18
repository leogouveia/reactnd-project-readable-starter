import { getCommentsOfPost } from "../utils/API";

export const INVALIDATE_REQUEST_COMMENTS = 'INVALIDATE_REQUEST_COMMENTS';
export function invalidateRequestComments() {
  return {
    type: INVALIDATE_REQUEST_COMMENTS
  }
}

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
function requestComments() {
  return {
    type: REQUEST_COMMENTS
  }
}

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments,
    receivedAt: Date.now()
  }
}

function fetchComments(postId) {
  return dispatch => {
    dispatch(requestComments());
    return getCommentsOfPost(postId)
      .then(res => {
        dispatch(receiveComments(res.data));
      })
  }
}

function shouldFetchComments(state) {
  const comments = state.items;
  if (!comments) {
    return true;
  } else if (state.isFetching) {
    return false;
  }
  return state.didInvalidate;
}

export function fetchCommentsIfNeeded(postId) {
  return (dispatch, getState) => {
    if (shouldFetchComments(getState())) {
      return dispatch(fetchComments(postId));
    } else {
      return Promise.resolve();
    }
  }
}
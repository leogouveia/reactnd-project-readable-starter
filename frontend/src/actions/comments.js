import { getCommentsOfPost } from "../utils/API";

export const COMMENTS_INVALIDATE = 'COMMENTS_INVALIDATE';
export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_RECEIVE = 'COMMENTS_RECEIVE';

export function invalidateRequestComments() {
  return {
    type: COMMENTS_INVALIDATE
  }
}

function requestComments() {
  return {
    type: COMMENTS_REQUEST
  }
}

function receiveComments(comments) {
  return {
    type: COMMENTS_RECEIVE,
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
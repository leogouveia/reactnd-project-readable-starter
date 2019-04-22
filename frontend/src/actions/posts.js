import { getPosts } from "../utils/API";

export const POSTS_INVALIDATE = "POSTS_INVALIDATE";
export const POSTS_REQUEST = "POSTS_REQUEST";
export const POSTS_RECEIVE = "POSTS_RECEIVE";
export const POSTS_FILTER = "POSTS_FILTER";
export const POST_ADD = "POST_ADD";

export function invalidateRequestPosts() {
  return {
    type: POSTS_INVALIDATE
  };
}

export function requestPosts() {
  return {
    type: POSTS_REQUEST
  };
}

function receivePosts(posts) {
  const actionObject = {
    type: POSTS_RECEIVE,
    posts,
    receivedAt: Date.now()
  };
  return actionObject;
}

function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts());
    return getPosts().then(posts => {
      dispatch(receivePosts(posts));
    });
  };
}

function shouldFetchPosts(state) {
  const posts = state.posts.items;
  if (!posts) {
    return true;
  } else if (state.isFetching) {
    return false;
  }
  return state.didInvalidate;
}

export function handleFetchPosts() {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts());
    } else {
      return Promise.resolve();
    }
  };
}

function addPost(post) {
  return {
    type: POST_ADD,
    post
  };
}

export function handleAddPost(text) {
  return dispatch => {
    return addPost({})
      .then(post => {
        dispatch(addPost(post));
      })
      .catch(err => {
        console.error(err);
        alert("There was an error. Try again.");
      });
  };
}

export function filterPosts(category) {
  return {
    type: POSTS_FILTER,
    category
  };
}

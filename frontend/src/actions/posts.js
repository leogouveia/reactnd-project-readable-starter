
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getPosts } from "../utils/API";

export const INVALIDATE_REQUEST_POSTS = 'INVALIDATE_REQUEST_POSTS';
export function invalidateRequestPosts() {
  return {
    type: INVALIDATE_REQUEST_POSTS
  };
}

export const REQUEST_POSTS = 'REQUEST_POSTS';
export function requestPosts() {
  return {
    type: REQUEST_POSTS
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
/**
 * 
 * @param {Post[]} posts 
 * @returns {Object}
 */
export function receivePosts(posts) {
  const actionObject = {
    type: RECEIVE_POSTS,
    posts,
    receivedAt: Date.now()
  }
  return actionObject;
}

function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts());
    return getPosts()
      .then(posts => {
        dispatch(receivePosts(posts))
      })
  }
}

function shouldFetchPosts(state) {
  const posts = state.posts.items;
  if (!posts) {
    return true;
  } else if(state.isFetching) {
    return false;
  } 
  return state.didInvalidate;
}

export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    const tester = shouldFetchPosts(getState());
    if (tester) {
      return dispatch(fetchPosts());
    } else {
      return Promise.resolve();
    }
  }
}

export const ADD_POST = 'ADD_POST';
/**
 * 
 * @param {Post} post 
 */
function addPost(post) {
  return {
    type: ADD_POST,
    post,
  }
}

/**
 * 
 * @param {string} text 
 * @param {string} replyingTo 
 */
export function handleAddPost(text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return addPost({text, author: authedUser, replyingTo})
        .then(post => {dispatch(addPost(post))})
        .catch((err) => {
          console.error(err);
          alert('There was an error. Try again.');
        })
        .finally(() => dispatch(hideLoading()));
  }
}
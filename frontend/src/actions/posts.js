import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const ADD_POST = 'ADD_POST';

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

function addPost(post) {
  return {
    type: ADD_POST,
    post,
  }
}

export function handleAddPost(text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return API.savePost({text, author: authedUser, replyingTo})
        .then(post => {dispatch(addPost(post))})
        .catch((err) => {
          console.error(err);
          alert('There was an error. Try again.');
        })
        .finally(() => dispatch(hideLoading()));
  }
}
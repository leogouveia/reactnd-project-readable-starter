import { receivePosts } from "./posts";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({posts}) => {
      dispatch(receivePosts(posts));
      dispatch(hideLoading());
    })
  }
}
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { fetchPostsIfNeeded } from "./posts";
import { fetchCategoriesIfNeeded } from "./categories";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return dispatch(fetchPostsIfNeeded()).then(() =>
      dispatch(fetchCategoriesIfNeeded())
    );
  };
}

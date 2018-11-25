import { handleFetchPosts } from "./posts";
import { handleFetchCategories } from "./categories";

export function handleInitialData() {
  return dispatch => {
    return dispatch(handleFetchPosts()).then(() =>
      dispatch(handleFetchCategories())
    );
  };
}

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCommentsIfNeeded, clearComments } from "../actions/comments";
import ShowPost from "./ShowPost";

function ShowPostContainer({ dispatch, comments, match, posts }) {
  const [post, usePost] = useState({});
  useEffect(() => {
    dispatch(fetchCommentsIfNeeded(match.params.id));
    const post =
      posts.items && posts.items.filter(p => p.id === match.params.id)[0];
    usePost(post);
    return () => {
      dispatch(clearComments());
    };
  }, [posts.items]);

  return (
    <div>
      {comments.items && post && (
        <ShowPost post={post} comments={comments.items} />
      )}
    </div>
  );
}

ShowPostContainer.propTypes = {
  comments: PropTypes.any,
  posts: PropTypes.any,
  dispatch: PropTypes.func,
  match: PropTypes.any
};
const mapStateToProps = ({ comments, posts }) => ({
  comments,
  posts
});

export default connect(mapStateToProps)(ShowPostContainer);

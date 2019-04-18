import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCommentsIfNeeded } from "../actions/comments";
import ShowPost from "./ShowPost";

function ShowPostContainer({ dispatch, comments, match, posts }) {
  const [post, usePost] = useState({});
  useEffect(() => {
    dispatch(fetchCommentsIfNeeded(match.params.id));
    const post =
      posts.items && posts.items.filter(p => p.id === match.params.id)[0];
    usePost(post);
  }, [posts.items]);

  return (
    <div>
      {comments.items && post && (
        <ShowPost post={post} comments={comments.items} />
      )}
    </div>
  );
}

ShowPostContainer.propTypes = {};
const mapStateToProps = ({ comments, posts }) => ({
  comments: comments,
  posts: { ...posts }
});

export default connect(mapStateToProps)(ShowPostContainer);

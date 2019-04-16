import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import PostList from "./PostList";

function PostListContainer({ posts, match }) {
  return <PostList posts={posts} category={match.params.category} />;
}

PostListContainer.propTypes = {
  posts: PropTypes.array,
  match: PropTypes.object
};

const mapStateToProps = ({ posts }) => ({ posts: posts.items });
export default withRouter(connect(mapStateToProps)(PostListContainer));

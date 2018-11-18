import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function PostList({ posts }) {
  return (
    <div>
      <ul>{posts && posts.map(item => <li key={item.id}>{item.title}</li>)}</ul>
    </div>
  );
}


PostList.propTypes = {
  posts: PropTypes.array
};

export default connect(({ posts }) => ({ posts: posts.items }))(PostList);

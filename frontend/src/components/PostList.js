import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import ResumedPost from "./ResumedPost";

function PostList({ posts, match }) {
  let _posts = posts;
  if (match.params.category && Array.isArray(posts)) {
    _posts = posts.filter(p => p.category === match.params.category);
  }
  return (
    <div>
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hello{match.params.category && `, ${match.params.category}`}!</h1>
          </div>
        </div>
      </div>

      <div className="level">
        <div className="tile is-ancestor">
          {_posts &&
            _posts.map(post => (
              <div className="tile" key={post.id}>
                <ResumedPost post={post} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.array,
  match: PropTypes.object
};

export default withRouter(
  connect(({ posts }) => ({ posts: posts.items }))(PostList)
);

import React from "react";
import PropTypes from "prop-types";
import ResumedPost from "./ResumedPost";

function PostList({ posts, category }) {
  if (category && Array.isArray(posts)) {
    posts = posts.filter(p => p.category === category);
  }
  return (
    <div>
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hello{category && `, ${category}`}!</h1>
          </div>
        </div>
      </div>

      <div className="level">
        <div className="tile is-ancestor">
          {posts &&
            posts.map(post => (
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
  category: PropTypes.string
};

export default PostList;

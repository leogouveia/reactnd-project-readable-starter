import React from "react";
import PropTypes from "prop-types";
import ResumedPost from "./ResumedPost";
import CategoryList from "./CategoryListContainer";

function PostList({ posts, category }) {
  if (category && Array.isArray(posts)) {
    posts = posts.filter(p => p.category === category);
  }
  return (
    <div>
      <div>
        <CategoryList />
      </div>
      <div>
        <h1>Hello{category && `, ${category}`}!</h1>
      </div>

      <div>
        <div>
          {posts &&
            posts.map(post => (
              <div key={post.id}>
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

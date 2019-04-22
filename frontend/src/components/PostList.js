import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ResumedPost from "./ResumedPost";
import CategoryList from "./CategoryListContainer";
import { sortBy } from "../utils";

function PostList({ posts = [], category }) {
  const [selectedSortBy, useSortBy] = useState("");
  const [_posts, usePosts] = useState([]);

  useEffect(() => {
    let filteredPosts = category
      ? posts.filter(p => p.category === category)
      : posts;
    usePosts(filteredPosts);
  }, [category, posts]);

  const handleChange = event => {
    if (event.target.value) {
      useSortBy(event.target.value);
      usePosts(sortBy(_posts, event.target.value));
    }
  };

  return (
    <div>
      <div>
        <CategoryList />
      </div>
      <div>
        <h1>Hello{category && `, ${category}`}!</h1>
      </div>
      <div>
        Sort by{" "}
        <div className="nes-select">
          <select value={selectedSortBy} onChange={handleChange}>
            <option value="timestamp">Date Time</option>
            <option value="voteScore">Vote Score</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>

      <div>
        <div>
          {_posts.map(post => (
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

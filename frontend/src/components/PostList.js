import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ResumedPost from "./ResumedPost";
import CategoryList from "./CategoryListContainer";

function PostList({ posts = [], category }) {
  const [selectedSortBy, useSortBy] = useState("");
  const [_posts, usePosts] = useState([]);

  useEffect(() => {
    let filteredPosts = category
      ? posts.filter(p => p.category === category)
      : posts;
    usePosts(filteredPosts);
  }, [category, posts]);

  const sortBy = type => {
    switch (type) {
      case "title":
        const sortedPosts = _posts.sort((p1, p2) => {
          if (p1.title > p2.title) return 1;
          else if (p1.title < p2.title) return -1;
          else return 0;
        });
        usePosts(sortedPosts);
        break;
      case "score":
        usePosts(
          _posts.sort((p1, p2) => {
            if (p1.voteScore < p2.voteScore) return 1;
            else if (p1.voteScore > p2.voteScore) return -1;
            else return 0;
          })
        );
        break;
      case "date":
        usePosts(
          _posts.sort((p1, p2) => {
            if (p1.timestamp > p2.timestamp) return 1;
            else if (p1.timestamp < p2.timestamp) return -1;
            else return 0;
          })
        );
        break;
      default:
        break;
    }
  };

  const handleChange = event => {
    useSortBy(event.target.value);
    sortBy(event.target.value);
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
        <select value={selectedSortBy} onChange={handleChange}>
          <option value="date">Date Time</option>
          <option value="score">Vote Score</option>
          <option value="title">Title</option>
        </select>
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

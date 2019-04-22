import React from "react";
import PropTypes from "prop-types";
import ResumedPost from "./ResumedPost";

function ShowPost({ post, comments }) {
  return (
    <div>
      {post && "body" in post && <ResumedPost post={post} />}
      {Array.isArray(comments) &&
        comments.map(comment => (
          <h1 key={comment.id}>
            <span>{comment.body}</span>
          </h1>
        ))}
    </div>
  );
}
ShowPost.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.array
};
export default ShowPost;

import React from "react";
import PropTypes from "prop-types";
import { FaHeart, FaComments, FaThumbsDown } from "react-icons/fa";
import moment from "moment";
import { NavLink } from "react-router-dom";

function ResumedPost({ post }) {
  return (
    <div>
      <NavLink to={post.id}>
        <article>
          <div>
            <div>
              <p>
                <strong>{post.author} </strong>@{" "}
                {moment(post.timestamp).format("MMM Do YY, H:mm")}
              </p>
            </div>
            <div>
              <p>
                <strong>{post.title}</strong>
                <br />
                {post.body.substring(0, 100)}
                {post.body.length >= 100 && "..."}
              </p>
            </div>
            <div>
              <div>
                <span>{post.category}</span>
              </div>
              <div>
                <button>
                  <span>
                    {post.voteScore > 0 ? <FaHeart /> : <FaThumbsDown />}
                  </span>
                  <span>&nbsp;{post.voteScore}</span>
                </button>
                <button>
                  <span>
                    <FaComments />
                  </span>
                  <span>&nbsp;{post.commentCount}</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      </NavLink>
    </div>
  );
}
ResumedPost.propTypes = {
  post: PropTypes.object.isRequired
};

export default ResumedPost;

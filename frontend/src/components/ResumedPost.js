import React from "react";
import PropTypes from "prop-types";
import { FaHeart, FaComments, FaThumbsDown } from "react-icons/fa";
import moment from "moment";

function ResumedPost({ post }) {
  return (
    <div className="box">
      <article className="media">
        <div className="media-content">
          <div className="content is-small">
            <p>
              <strong>{post.author} </strong>@{" "}
              {moment(post.timestamp).format("MMM Do YY, H:mm")}
            </p>
          </div>
          <div className="content">
            <p>
              <strong>{post.title}</strong>
              <br />
              {post.body.substring(0, 100)}
              {post.body.length >= 100 && "..."}
            </p>
          </div>
          <div className="level is-mobile">
            <div className="level-left">
              <span className="tag">{post.category}</span>
            </div>
            <div className="level-right">
              <a className="level-item">
                <span className="icon is-small">
                  {post.voteScore > 0 ? <FaHeart /> : <FaThumbsDown />}
                </span>
                <span className="is-small">&nbsp;{post.voteScore}</span>
              </a>
              <a className="level-item">
                <span className="icon is-small">
                  <FaComments />
                </span>
                <span className="is-small">&nbsp;{post.commentCount}</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
ResumedPost.propTypes = {
  post: PropTypes.object.isRequired
};

export default ResumedPost;

import React from "react";
import PropTypes from "prop-types";
import { FaComments } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import IconComment from "./IconComment";

function ResumedPost({ post }) {
  return (
    <div>
      <NavLink to={post.id}>
        <article>
          <div>
            <div>
              <p>
                <strong>{post.author} </strong>@{" "}
                {new Date(post.timestamp).toLocaleString()}
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
                    {post.voteScore > 0 ? (
                      <span className="nes-icon is-small heart" />
                    ) : (
                      <span
                        className="nes-icon is-small like"
                        style={{
                          transformOrigin: "center center",
                          transform: "rotate(180deg)"
                        }}
                      />
                    )}
                  </span>
                  <span>&nbsp;{post.voteScore}</span>
                </button>
                <button>
                  <span>
                    <IconComment />
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

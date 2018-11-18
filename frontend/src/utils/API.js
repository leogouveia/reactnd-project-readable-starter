import axios from "axios";
const AUTH_TOKEN = Math.random()
  .toString(36)
  .substring(7);

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

/**
 * @typedef {Object} Post
 * @property {number} id UUID
 * @property {number} timestamp
 * @property {string} title
 * @property {string} body
 * @property {*} category
 */

/**
 * @typedef {Object} Comment
 * @property {number} id UUID
 * @property {number} timestamp
 * @property {string} body
 * @property {string} author
 * @property {number} parentId Post Id
 */

 /**
  * @typeof {Object} Category
  * @property {string} name
  * @property {string} path
  */

/**
 * Get posts
 * @async
 * @returns {Post[]}
 */
export function getPosts() {
  return axios.get("/posts")
    .then(({data}) => data);
}

/**
 * Add a new post
 * @async
 * @param {Post} post
 * @returns {Post}
 */
export function addPost(post) {
  return axios.post("/posts", post);
}

/**
 * Get categories
 * @async
 * @returns {Category[]}
 */
export function getCategories() {
  return axios.get("/categories")
    .then(({data}) => data.categories);
}

/**
 * Get post of category.
 *
 * @param {number} id The Post ID number
 * @async
 * @returns {Post[]}
 */
export function getPostsOfCategory(id) {
  return axios.get(`/${id}/posts`);
}

/**
 * Get post of id.
 * @param {number} id The Post ID number
 * @async
 * @returns {Post}
 */
export function getPost(id) {
  return axios.get(`/posts/${id}`);
}

/**
 * Vote on a post
 * @param {number} id
 * @param {string} vote "upVote" or "downVote"
 * @returns {Post}
 */
export function voteOnPost(id, vote) {
  return axios.post(`/posts/${id}`, vote);
}

/**
 * Edit details of an existing post
 * @param {Post} post
 * @returns {Post}
 */
export function editPost(post) {
  const { id, title, body } = post;
  return axios.put(`/post/${id}`, { title, body });
}

/**
 * Sets the deleted flag for a post to 'true'.
 * Sets the parentDeleted flag for all child comments to 'true'.
 * @param {number} id Post ID
 * @returns {Post}
 */
export function deletePost(id) {
  return axios.delete(`/posts/${id}`);
}

/**
 * Get comments of post with ID.
 * @param {number} id The Post ID
 * @returns {Comment[]}
 */
export function getCommentsOfPost(id) {
  return axios.get(`/posts/${id}/comments`);
}

/**
 * Add a comment to a post.
 * @param {Comment} comment
 * @returns {Comment}
 */
export function addComment(comment) {
  return axios.post("/comments", comment);
}
/**
 * Get details of comment with ID.
 * @param {number} id Comment ID
 * @returns {Comment}
 */
export function getComment(id) {
  return axios.get(`/comments/${id}`);
}

/**
 * Vote on a comment.
 * @param {number} id Id of comment
 * @param {string} option upVote or downVote
 * @returns {Comment}
 */
export function voteOnComment(id, option) {
  return axios.post(`/comment/${id}`, { option });
}

/**
 * Edit details of an existing comment.
 * @param {Comment} comment
 * @returns {Comment}
 */
export function editComment(comment) {
  const { id, timestamp, body } = comment;
  return axios.put(`/comments/${id}`, { timestamp, body });
}

/**
 * Sets a comment's deleted flag to true
 * @param {number} id
 * @returns {Comment}
 */
export function deleteComment(id) {
  return axios.delete(`/comments/${id}`);
}

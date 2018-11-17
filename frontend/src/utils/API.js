import axios from "axios";
const AUTH_TOKEN = Math.random().toString(36).substring(7);

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export function getPosts() {
  return axios.get('/posts');
}

export function addPost(post) {
  return axios.post('/posts', post);
}

export function getCategories() {
  return axios.get('/categories');
}

/**
 * Get post of category.
 * 
 * @param {number} id The Post ID number
 */
export function getPostsOfCategory(id) {
  return axios.get(`/${id}/posts`);
}

/**
 * Get post of id.
 * @param {number} id The Post ID number
 */
export function getPost(id) {
  return axios.get(`/posts/${id}`);
}

/**
 * Get comments of post with ID.
 * @param {number} id The Post ID
 */
export function getCommentsOfPost(id) {
  return axios.get(`/posts/${id}/comments`);
}

/**
 * Get details of comment with ID.
 * @param {number} id Comment ID
 */
export function getComment(id) {
  return axios.get(`/comments/${id}`);
}

import axios from 'axios';
import {
  getPostsStart,
  getPostsSuccess,
  getPostsError,
  deletePostStart,
  deletePostSuccess,
  deletePostError,
  addPostStart,
  addPostError,
  getPostFromIdStart,
  getPostFromIdSuccess,
  getPostFromIdError,
  putPostStart,
  putPostError,
  addCommentStart,
  addCommentError,
  getCommentStart,
  getCommentSuccess,
  getCommentError,
} from './postsAction';

//

export const addComment = (comment, id) => dispatch => {
  dispatch(addCommentStart());
  axios
    .post('https://bloggy-api.herokuapp.com/comments', comment)
    .then(() => dispatch(getComment(id)))
    .catch(error => dispatch(addCommentError(error)));
};

export const getComment = id => dispatch => {
  dispatch(getCommentStart());

  axios
    .get(`https://bloggy-api.herokuapp.com/posts/${id}/comments`)
    .then(comments => dispatch(getCommentSuccess(comments)))
    .catch(error => dispatch(getCommentError(error)));
};

export const getPosts = () => dispatch => {
  dispatch(getPostsStart());

  axios
    .get('https://bloggy-api.herokuapp.com/posts')
    .then(posts => dispatch(getPostsSuccess(posts)))
    .catch(error => dispatch(getPostsError(error)));
};

export const getPost = id => dispatch => {
  dispatch(getPostFromIdStart());

  return axios
    .get(`https://bloggy-api.herokuapp.com/posts/${id}`)
    .then(post => dispatch(getPostFromIdSuccess(post)))
    .catch(error => dispatch(getPostFromIdError(error)));
};

// //////////////////////////////////////////////////////////////////////////

export const putPost = (id, post) => dispatch => {
  dispatch(putPostStart());

  axios
    .delete(`https://bloggy-api.herokuapp.com/posts/${id}`, post)
    .then(() => console.log('WORKS'))
    .catch(error => dispatch(putPostError(error)));
};

// /////////////////////////////////////////////////////////////////////////////

export const deletePost = id => dispatch => {
  dispatch(deletePostStart());

  axios
    .delete(`https://bloggy-api.herokuapp.com/posts/${id}`)
    .then(() => dispatch(deletePostSuccess(id)))
    .catch(error => dispatch(deletePostError(error)));
};

export const addPost = post => dispatch => {
  dispatch(addPostStart());

  axios
    .post('https://bloggy-api.herokuapp.com/posts', post)
    .then(() => dispatch(getPosts()))
    .catch(error => dispatch(addPostError(error)));
};

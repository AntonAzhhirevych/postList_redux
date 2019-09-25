import types from './postsTypes';

// get all posts

export const getPostsStart = () => ({
  type: types.GET_POSTS_START,
});

export const getPostsSuccess = posts => ({
  type: types.GET_POSTS_SUCCESS,
  payload: posts.data,
});

export const getPostsError = error => ({
  type: types.GET_POSTS_ERROR,
  payload: error,
});

//

// open modal

export const openModal = () => ({
  type: types.OPEN_MODAL,
  payload: true,
});

export const closeModal = () => ({
  type: types.OPEN_MODAL,
  payload: false,
});

//

// update post

export const putPostStart = () => ({
  type: types.PUT_POST_START,
});

export const putPostSuccess = post => ({
  type: types.PUT_POST_SUCCESS,
  payload: post,
});

export const putPostError = error => ({
  type: types.PUT_POST_ERROR,
  payload: error,
});

//

// get one post from id

export const getPostFromIdStart = () => ({
  type: types.GET_POST_FROM_ID_START,
});

export const getPostFromIdSuccess = post => ({
  type: types.GET_POST_FROM_ID_SUCCESS,
  payload: post.data,
});

export const getPostFromIdError = error => ({
  type: types.GET_P,
  payload: error,
});

//

// delete post

export const deletePostStart = () => ({
  type: types.DELETE_POST_START,
});

export const deletePostSuccess = id => ({
  type: types.DELETE_POST_SUCCESS,
  payload: id,
});

export const deletePostError = error => ({
  type: types.DELETE_POST_ERROR,
  payload: error,
});

//

// add new post

export const addPostStart = () => ({
  type: types.ADD_POST_START,
});

export const addPostSuccess = note => ({
  type: types.ADD_POST_SUCCESS,
  payload: note,
});

export const addPostError = error => ({
  type: types.ADD_POST_ERROR,
  payload: error,
});

//

// add new COMMENT

export const addCommentStart = () => ({
  type: types.ADD_COMMENT_START,
});

export const addCommentSuccess = comment => ({
  type: types.ADD_COMMENT_SUCCESS,
  payload: comment.data,
});

export const addCommentError = error => ({
  type: types.ADD_COMMENT_ERROR,
  payload: error,
});

//

// get  COMMENT for Post

export const getCommentStart = () => ({
  type: types.GET_COMMENT_START,
});

export const getCommentSuccess = comment => ({
  type: types.GET_COMMENT_SUCCESS,
  payload: comment.data,
});

export const getCommentError = error => ({
  type: types.GET_COMMENT_ERROR,
  payload: error,
});

//

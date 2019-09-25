// import { getPosts } from './notesOperations';
import types from './postsTypes';

const initialState = {
  posts: [],
  post: {},
  isActiveModal: false,
  comments: [],
};

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_POSTS_SUCCESS:
      return { ...state, posts: payload };
    case types.GET_POST_FROM_ID_SUCCESS:
      return { ...state, post: payload };
    case types.DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== payload),
      };
    case types.ADD_POST_SUCCESS:
      return [payload, ...state];
    case types.OPEN_MODAL:
      return { ...state, isActiveModal: payload };
    case types.CLOSE_MODAL:
      return { ...state, isActiveModal: payload };
    case types.ADD_COMMENT_SUCCESS:
      return { ...state, comments: payload };
    case types.GET_COMMENT_SUCCESS:
      return { ...state, comments: payload };
    // case types.PUT_POST_SUCCESS:
    //   return

    default:
      return state;
  }
};

export default postsReducer;

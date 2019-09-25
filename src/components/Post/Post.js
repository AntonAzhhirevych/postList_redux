import React from 'react';
// import { withRouter } from 'react-router-dom';

const Post = ({ post, onReturn, onDelete, onOpen }) => (
  <div>
    <button onClick={onReturn} type="button">
      return
    </button>
    <p>{post.title}</p>
    <p>{post.body}</p>
    <button onClick={onOpen} type="button">
      Put
    </button>
    <button onClick={() => onDelete(post.id)} type="button">
      Delete
    </button>
  </div>
);

export default Post;

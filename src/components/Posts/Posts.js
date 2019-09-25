import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts, onDelete }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <p>{post.title}</p>

        <p>{post.body}</p>
        <Link to={`posts/${post.id}`}>
          <button type="button">open</button>
        </Link>

        <button onClick={() => onDelete(post.id)} type="button">
          delete
        </button>
      </li>
    ))}
  </ul>
);

export default Posts;

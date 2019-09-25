import React from 'react';

const CreatePost = ({ title, body, onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <input
      name="title"
      onChange={onChange}
      value={title}
      type="text"
      placeholder="added title..."
    />
    <input
      name="body"
      onChange={onChange}
      value={body}
      type="text"
      placeholder="added text..."
    />

    <button type="submit">SUBMIT</button>
  </form>
);

export default CreatePost;

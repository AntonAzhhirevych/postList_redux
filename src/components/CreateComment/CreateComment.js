import React from 'react';

const CreateComment = ({ onChange, value, onSubmit }) => (
  <div>
    <form onSubmit={onSubmit}>
      <input
        name="comment"
        onChange={onChange}
        value={value}
        type="text"
        placeholder="added new comment..."
      />
      <button type="submit">add comment</button>
    </form>
  </div>
);

export default CreateComment;

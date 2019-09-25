import React from 'react';
import Post from '../components/Post/PostContainer';
import Comments from '../components/Comments/CommentsContainer';
import CreateComment from '../components/CreateComment/CreateCommentContainer';

const PagePost = () => (
  <div>
    <Post />
    <Comments />
    <CreateComment />
  </div>
);
export default PagePost;

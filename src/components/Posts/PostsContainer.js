/* eslint-dissable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Posts from './Posts';
import * as postsOperation from '../../redux/postsOperations';
import { getAllPosts } from '../../redux/postsSelectors';

class PostsContainer extends Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  render() {
    const { posts, removePost } = this.props;
    return <Posts posts={posts} onDelete={removePost} />;
  }
}

const mapStateToProps = state => ({
  posts: getAllPosts(state),
});

const mapDispatchToProps = {
  fetchPosts: postsOperation.getPosts,
  removePost: postsOperation.deletePost,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(PostsContainer));

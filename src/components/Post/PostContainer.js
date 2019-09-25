/*eslint-disable */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Post from './Post';
import * as postsOperation from '../../redux/postsOperations';
import { openModal } from '../../redux/postsAction';
import { getOnePost, getPostsComments } from '../../redux/postsSelectors';

class PostContainer extends Component {
  componentDidMount() {
    const { fetchPost, match, getComments } = this.props;
    const postId = match.params.id;
    fetchPost(postId);
  }

  handleReturnButton = () => {
    const { history } = this.props;
    history.push('/posts');
  };
  handleDeletePost = id => {
    const { history, removePost } = this.props;
    removePost(id);
    history.replace('/posts');
  };

  render() {
    const { post, open } = this.props;
    // console.log(open);
    return (
      <div>
        <Post
          post={post}
          onDelete={this.handleDeletePost}
          onReturn={this.handleReturnButton}
          onOpen={open}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: getOnePost(state),
});

const mapDispatchToProps = {
  fetchPost: postsOperation.getPost,
  removePost: postsOperation.deletePost,
  open: openModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(PostContainer));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Comments from './Comments';
import { getPostsComments } from '../../redux/postsSelectors';
import * as postsOperation from '../../redux/postsOperations';

class CommentsContainer extends Component {
  componentDidMount() {
    const { match, getComments } = this.props;
    const postId = match.params.id;
    getComments(postId);
  }

  render() {
    const { comments } = this.props;
    return <Comments comments={comments} />;
  }
}

const mapStateToProps = state => ({
  comments: getPostsComments(state),
});

const mapDispatchToProps = {
  getComments: postsOperation.getComment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(CommentsContainer));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateComment from './CreateComment';
import * as postsOperation from '../../redux/postsOperations';
// import { addCommentError } from '../../redux/postsAction';

class CreateCommentContainer extends Component {
  state = {
    body: '',
    postId: '',
  };

  componentDidMount() {
    const { match } = this.props;
    const postId = match.params.id;

    this.setState({ postId });
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ body: value });
  };

  handleSubmit = e => {
    const { addComment } = this.props;
    const { postId } = this.state;

    e.preventDefault();
    addComment(this.state, postId);
    console.log(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      body: '',
    });
  };

  render() {
    const { body } = this.state;
    return (
      <CreateComment
        value={body}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addComment: postsOperation.addComment,
};

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(CreateCommentContainer));

import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CreatePost from './CreatePost';
import * as postsOperation from '../../redux/postsOperations';

class CreatePostContainer extends Component {
  state = {
    title: '',
    body: '',
  };

  handleChange = ({ target }) => {
    // const { AddPost, onClose, match } = this.props;

    const { name, value } = target;
    this.setState({ [name]: value });
    // console.log(match);
  };

  handleSubmit = e => {
    const { AddPost, onClose, match } = this.props;

    const operation = match.path.length;

    // operation >= 5 ? AddPost(this.state) : console.log('m');

    e.preventDefault();

    AddPost(this.state);
    onClose();
    this.reset();
  };

  reset = () => {
    this.setState({
      title: '',
      body: '',
    });
  };

  render() {
    const { title, body } = this.state;
    return (
      <CreatePost
        title={title}
        body={body}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    );
  }
}

const mapDispatchToProps = {
  AddPost: postsOperation.addPost,
  PutPost: postsOperation.putPost,
};

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(CreatePostContainer));

/* eslint-disable */
import { connect } from 'react-redux';
import React, { Component, createRef } from 'react';
import Modal from './Modal';
import CreatePost from '../CreatePost/CreatePostContainer';
import { getActiveModal } from '../../redux/postsSelectors';
import { openModal, closeModal } from '../../redux/postsAction';

class ModalContainer extends Component {
  // state = {
  //   isOpen: false,
  // };

  //
  createClose = createRef();

  componentDidMount(e) {
    window.addEventListener('keydown', this.handleEsc);
    console.log('componentDidMount');

    console.log('this.props', this.props);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc);
    console.log('componentWillUnmount');
  }

  handleEsc = e => {
    const { close } = this.props;
    if (e.code !== 'Escape') return;
    // this.handleClose();
    close();
  };

  closeWindow = e => {
    const { close } = this.props;
    const { current } = this.createClose;

    if (current !== e.target) return;
    // this.handleClose();
    close();
  };

  //

  // handleOpen = () => {
  //   this.setState({ isOpen: true });
  // };

  handleClose = e => {
    const { close } = this.props;
    close();
    // this.setState({ isOpen: false });
  };

  render() {
    // const { isOpen } = this.state;
    const { open, isActiveModal } = this.props;
    return (
      <div>
        <button onClick={() => open()}>Open</button>
        {isActiveModal && (
          <Modal referanse={this.createClose} onClose={this.closeWindow}>
            <CreatePost onClose={this.handleClose} />
          </Modal>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isActiveModal: getActiveModal(state),
});

const mapDispatchToProps = dispatch => ({
  open: () => dispatch(openModal()),
  close: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalContainer);

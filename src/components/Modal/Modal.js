/*eslint-disable */
import React from 'react';
import css from '../Modal/Modal.module.css';

const Modal = ({ onClose, children, referanse }) => (
  <div onClick={onClose} className={css.drop} ref={referanse}>
    <div className={css.innerMenu}>{children}</div>
  </div>
);

export default Modal;

import React from 'react';
import Loader from './Loader';

const Modal = ({ handleClose, show, modalHeight = '359px' }) => {
  const opacity = show ? { opacity: 1 } : { opacity: 0, display: 'none' };
  const styles = { height: modalHeight };
  return (
    <div className="modal display-flex" style={opacity}>
      <section className="modal-main" style={styles}>
        <Loader />
      </section>
    </div>
  );
};

export default Modal;

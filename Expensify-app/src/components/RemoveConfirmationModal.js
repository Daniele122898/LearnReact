import React from 'react';
import Modal from 'react-modal';

const RemoveConfirmationModal = ({ modalOpen, onModalClose }) => (
  <Modal
    isOpen={modalOpen}
    onRequestClose={() => onModalClose(false)}
    contentLabel={"Remove Expense"}
    closeTimeoutMS={200}
    className="modal"
    style={{
      overlay: {
        backgroundColor: 'rgb(136, 136, 136, 0.50)'
      },
    }}
  >
    <h3 className="modal__title">Remove Expense?</h3>
    <button className="button" onClick={() => onModalClose(true)}>Remove</button>
    <button className="button button-secondary" onClick={() => onModalClose(false)}>Cancel</button>
  </Modal>
);

export default RemoveConfirmationModal;
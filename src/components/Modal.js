// src/components/Modal.js

import React from 'react';
import './Modal.css'; // You can create a separate CSS file for styling

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
       <div className="modal-content">
        
          <span className="close" onClick={onClose}>
            &times;
          </span>

          <h2>{title}</h2>
          {children}
       </div>
    </div>
  );
};

export default Modal;

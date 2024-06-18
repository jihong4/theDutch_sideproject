// components/Modal.js
'use client';

import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.appendChild(modalRef.current);
    }

    return () => {
      if (modalRef.current && modalRef.current.parentNode) {
        modalRef.current.parentNode.removeChild(modalRef.current);
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div ref={modalRef} className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
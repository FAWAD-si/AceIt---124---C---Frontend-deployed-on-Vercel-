"use client";
import React, { useEffect } from "react";
import Modal from "react-modal";
import Button from "./Button";

const ModalComponent = ({ isOpen, onClose, title, children, footer }) => {
  
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      
      Modal.setAppElement("body"); 
    }
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 backdrop-blur bg-opacity-10 flex items-center justify-center z-50"
      className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-blue-200 p-6 outline-none max-w-lg w-full m-4"
    >
      {/* Header */}
      {title && (
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-lg font-bold"
          >
            &times;
          </button>
        </div>
      )}

      {/* Body */}
      <div className="mb-4">{children}</div>

      {/* Footer */}
      {footer ? (
        <div className="flex justify-end space-x-2">{footer}</div>
      ) : (
        <div className="flex justify-end">
          <Button onClick={onClose} variant="secondary">Close</Button>
        </div>
      )}
    </Modal>
  );
};

export default ModalComponent;
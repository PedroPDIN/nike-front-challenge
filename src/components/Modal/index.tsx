import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-2 rounded-lg shadow-lg w-[70%] relative">
        <div className="flex justify-end items-center pb-2">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black text-4xl mr-4"
          >
            &times;
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;

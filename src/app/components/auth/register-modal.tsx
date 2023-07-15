import React from 'react';
import { Modal } from '../generic-components/modal';

export interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegister: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  onRegister
}) => {
  return (
    <div>
      <Modal
        title={'Inscription'}
        description={''}
        isModal={isOpen}
        onClose={onClose}
        onConfirm={onRegister}
      >
        Test
      </Modal>
    </div>
  );
};

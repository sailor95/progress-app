import React, { FC } from 'react';

import styles from './styles.module.scss';

interface BtnDialogProps {
  show: boolean;
  onClose: () => void;
  onMaskClick?: () => void;
}

const BtnDialog: FC<BtnDialogProps> = ({ show, onClose, onMaskClick }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.container} onClick={onClose}>
      <div>Name</div>
      <div>Hotkey</div>
      <div>Color</div>

      <div className={styles.buttons}>Buttons</div>
    </div>
  );
};

export default BtnDialog;

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
    <div className={styles.outer} onClick={onMaskClick}>
      <div className={styles.inner} onClick={onClose}>
        Hi
      </div>
    </div>
  );
};

export default BtnDialog;

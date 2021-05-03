import React, { useState } from 'react';

import QuickBtn from './QuickBtn';
import BtnDialog from './BtnDialog';

import styles from './styles.module.scss';

const QuickBtnSet = () => {
  // TODO: Color
  // TODO: Hotkey
  const [showDialog, setShowDialog] = useState(false);

  const handleShowDialog = () => {
    setShowDialog(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.btnHint}>Hint</div>

      <QuickBtn showDialog={handleShowDialog} />

      <BtnDialog
        show={showDialog}
        onClose={() => setShowDialog(false)}
        onMaskClick={() => setShowDialog(false)}
      />
    </div>
  );
};

export default QuickBtnSet;

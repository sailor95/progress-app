import React, { FC, useState } from 'react';

import QuickBtn from './QuickBtn';
import BtnDialog from './BtnDialog';

import styles from './styles.module.scss';

interface QuickBtnSetProp {
  index: number;
}

const QuickBtnSet: FC<QuickBtnSetProp> = ({ index }) => {
  const [showDialog, setShowDialog] = useState(false);

  const handleShowDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const handleSaveButtonConfig = (data: any) => {
    console.log(data);
    console.log(`Save data of index: ${index}`);
    setShowDialog(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.btnHint}>Hint</div>

      <QuickBtn showDialog={handleShowDialog} />

      <BtnDialog
        open={showDialog}
        onClose={handleCloseDialog}
        onSave={handleSaveButtonConfig}
      />
    </div>
  );
};

export default QuickBtnSet;

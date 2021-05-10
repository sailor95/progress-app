import React, { FC } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import AddIcon from '@material-ui/icons/Add';
import grey from '@material-ui/core/colors/grey';

import styles from './styles.module.scss';

interface QuickBtnProps {
  showDialog: () => void;
}

const QuickBtn: FC<QuickBtnProps> = ({ showDialog }) => {
  return (
    <>
      <ButtonBase className={styles.container} onClick={showDialog}>
        <AddIcon style={{ color: grey[50], fontSize: '4rem' }} />
      </ButtonBase>
    </>
  );
};

export default QuickBtn;

import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

interface QuickBtnProps {
  showDialog: () => void;
}

const QuickBtn: FC<QuickBtnProps> = ({ showDialog }) => {
  return (
    <>
      <div className={styles.container} onClick={showDialog}>
        <FontAwesomeIcon icon={faPlus} size="2x" inverse />
      </div>
    </>
  );
};

export default QuickBtn;

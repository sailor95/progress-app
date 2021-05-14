import React, { FC } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import AddIcon from '@material-ui/icons/Add';
import grey from '@material-ui/core/colors/grey';

import { QuickButtonData } from '../../interfaces';

import styles from './styles.module.scss';

interface QuickBtnProps {
  data?: QuickButtonData;
  showDialog: () => void;
}

const QuickBtn: FC<QuickBtnProps> = ({ data, showDialog }) => {
  const handleAddProgress = () => {
    // TODO: Fire API to add progress
    console.log('Add progress of', data?.name);
  };

  return (
    <>
      <ButtonBase
        className={styles.container}
        onClick={data ? handleAddProgress : showDialog}
      >
        {data ? (
          <div className={styles.data_btn}>
            <div
              className={styles.data_color}
              style={{ backgroundColor: data.color }}
            />
            <div className={styles.data_name}>{data.name}</div>
          </div>
        ) : (
          <AddIcon style={{ color: grey[50], fontSize: '4rem' }} />
        )}
      </ButtonBase>
    </>
  );
};

export default QuickBtn;

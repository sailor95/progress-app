import React, { FC, useState, MouseEvent } from 'react';
import { ButtonBase, IconButton } from '@material-ui/core';
import { Add as AddIcon, Create as CreateIcon } from '@material-ui/icons';
import grey from '@material-ui/core/colors/grey';

import { QuickButtonData } from '../../interfaces';

import styles from './styles.module.scss';

interface QuickBtnProps {
  data?: QuickButtonData;
  showDialog: () => void;
  onEdit: () => void;
}

const QuickBtn: FC<QuickBtnProps> = ({ data, showDialog, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleAddProgress = () => {
    // TODO: Fire API to add progress
    console.log('Add progress of', data?.name);
  };

  const handleEdit = (e: MouseEvent) => {
    e.stopPropagation();
    onEdit();
  };

  return (
    <>
      <ButtonBase
        className={styles.container}
        onClick={data ? handleAddProgress : showDialog}
        aria-label="create"
        disableRipple
        onMouseEnter={() => setShowEdit(true)}
        onMouseLeave={() => setShowEdit(false)}
      >
        {data ? (
          <>
            <div className={styles.data_btn}>
              <div
                className={styles.data_color}
                style={{ backgroundColor: data.color }}
              />
              <div className={styles.data_name}>{data.name}</div>
            </div>
            <IconButton
              classes={{ root: styles.create_btn }}
              onClick={handleEdit}
              size="small"
              style={{ opacity: showEdit ? 1 : 0 }}
              aria-label="edit"
            >
              <CreateIcon />
            </IconButton>
          </>
        ) : (
          <AddIcon style={{ color: grey[50], fontSize: '4rem' }} />
        )}
      </ButtonBase>
    </>
  );
};

export default QuickBtn;

import React, { FC, useState, MouseEvent } from 'react'
import { ButtonBase, IconButton } from '@material-ui/core'
import { Add as AddIcon, Create as EditIcon } from '@material-ui/icons'
import grey from '@material-ui/core/colors/grey'

import { Mission } from '../../interfaces'

import styles from './styles.module.scss'

interface QuickBtnProps {
  mission?: Mission
  showDialog: () => void
  onEdit: () => void
  onAddProgress: () => void
}

const QuickBtn: FC<QuickBtnProps> = ({
  mission,
  showDialog,
  onEdit,
  onAddProgress,
}) => {
  const [showEdit, setShowEdit] = useState(false)

  const handleAddProgress = () => {
    onAddProgress()
  }

  const handleEdit = (e: MouseEvent) => {
    e.stopPropagation()

    onEdit()

    if (document.activeElement instanceof HTMLElement) {
      //  Remove the :focus CSS effect after showing the dialog
      document.activeElement.blur()
    }
  }

  return (
    <div
      className={styles.container}
      onMouseOver={() => setShowEdit(true)}
      onMouseLeave={() => setShowEdit(false)}
    >
      <ButtonBase
        className={styles.button_base}
        onClick={mission ? handleAddProgress : showDialog}
        aria-label="create"
        disableRipple
      >
        {mission ? (
          <>
            <div className={styles.data_btn}>
              <div
                className={styles.data_color}
                style={{ backgroundColor: mission.color }}
              />
              <div className={styles.data_name}>{mission.name}</div>
            </div>
          </>
        ) : (
          <AddIcon style={{ color: grey[50], fontSize: '4rem' }} />
        )}
      </ButtonBase>
      {mission && (
        <IconButton
          classes={{ root: styles.edit_btn }}
          onClick={handleEdit}
          size="small"
          style={{ opacity: showEdit ? 1 : 0 }}
          aria-label="edit"
        >
          <EditIcon />
        </IconButton>
      )}
    </div>
  )
}

export default QuickBtn

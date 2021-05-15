import React, { FC, useState } from 'react'

import HotkeyHint from './HotkeyHint'
import QuickBtn from './QuickBtn'
import BtnDialog from './BtnDialog'
import { QuickButtonData } from '../interfaces'

import styles from './styles.module.scss'

interface QuickBtnSetProp {
  index: number
}

const QuickBtnSet: FC<QuickBtnSetProp> = ({ index }) => {
  const [showDialog, setShowDialog] = useState(false)
  const [buttonData, setButtonData] = useState<QuickButtonData>()

  const handleShowDialog = () => {
    setShowDialog(true)
  }

  const handleSaveButtonConfig = (data: any) => {
    console.log(`Save data:`, index, data)
    setButtonData(data)
    // TODO: Fire api to save QuickButtonData if all data valid
    setShowDialog(false)
  }

  const handleCloseDialog = () => {
    setShowDialog(false)
  }

  return (
    <div className={styles.container}>
      <HotkeyHint name={buttonData?.hotkey} />

      <QuickBtn
        data={buttonData}
        showDialog={handleShowDialog}
        onEdit={handleShowDialog}
      />

      <BtnDialog
        data={buttonData}
        open={showDialog}
        onSave={handleSaveButtonConfig}
        onClose={handleCloseDialog}
      />
    </div>
  )
}

export default QuickBtnSet

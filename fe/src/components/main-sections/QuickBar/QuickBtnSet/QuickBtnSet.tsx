import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'

import HotkeyHint from './HotkeyHint'
import QuickBtn from './QuickBtn'
import BtnDialog from './BtnDialog'
import { QuickButtonConfig } from '../interfaces'
import HotKeysHoc from '../../../hoc/HotKeysHoc'
import { myConsole } from '../../../../utils/dev'
import { addButtonConfig } from '../actions'

import styles from './styles.module.scss'

interface QuickBtnSetProp {
  index: number
}

const QuickBtnSet: FC<QuickBtnSetProp> = ({ index }) => {
  const [showDialog, setShowDialog] = useState(false)
  const [buttonConfig, setButtonConfig] = useState<QuickButtonConfig>()

  const dispatch = useDispatch()

  const handleShowDialog = () => {
    setShowDialog(true)
  }

  const handleSaveButtonConfig = (config: any) => {
    // TODO: Get unique record id for the quick button from BE and save it into buttonConfig
    // TODO: Fire api to save QuickButtonConfig if all data valid
    myConsole.dev(`Save data:`, index, config)
    dispatch(addButtonConfig(config)) // FIXME: Dispatch this action after api succeeded
    setButtonConfig(config)
    setShowDialog(false)
  }

  const handleCloseDialog = () => {
    setShowDialog(false)
  }

  const onKeyDown = (keyName: string, e: KeyboardEvent, handle: any) => {
    myConsole.dev('Key down', keyName)
    handleAddProgress()
  }

  const handleAddProgress = () => {
    // TODO: Fire api to add progress
    myConsole.dev('Add progress of', index, buttonConfig?.name)
  }

  return (
    <HotKeysHoc keyName={buttonConfig?.hotkey} onKeyDown={onKeyDown}>
      <div className={styles.container}>
        <HotkeyHint name={buttonConfig?.hotkey} />

        <QuickBtn
          config={buttonConfig}
          showDialog={handleShowDialog}
          onEdit={handleShowDialog}
          onAddProgress={handleAddProgress}
        />

        <BtnDialog
          config={buttonConfig}
          open={showDialog}
          onSave={handleSaveButtonConfig}
          onClose={handleCloseDialog}
        />
      </div>
    </HotKeysHoc>
  )
}

export default QuickBtnSet

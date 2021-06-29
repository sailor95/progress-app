import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'

import HotkeysHoc from '@components/hoc/HotkeysHoc'
import { myConsole } from '@utils/dev'
import { useOwnButtonConfig } from '@hooks/index'
import HotkeyHint from './HotkeyHint'
import QuickBtn from './QuickBtn'
import BtnDialog from './BtnDialog'
import { addButtonConfig, updateButtonConfig } from '../actions'
import { QuickButtonConfig } from '../interfaces'

import styles from './styles.module.scss'

interface QuickBtnSetProp {
  index: number
}

const QuickBtnSet: FC<QuickBtnSetProp> = ({ index }) => {
  const [showDialog, setShowDialog] = useState(false)
  const [showClicked, setShowClicked] = useState(false)

  const ownConfig = useOwnButtonConfig(index)

  const dispatch = useDispatch()

  const handleShowDialog = () => {
    setShowDialog(true)
  }

  const showClickEffect = () => {
    setShowClicked(true)
    setTimeout(() => {
      setShowClicked(false)
    }, 100)
  }

  const handleSaveButtonConfig = (config: QuickButtonConfig) => {
    // TODO: Fire api to save QuickButtonConfig if all data valid
    myConsole.api(`Save data:`, index, config)
    dispatch(addButtonConfig(config)) // FIXME: Dispatch this action after api succeeded
    setShowDialog(false)
  }

  const handleUpdateButtonConfig = (config: QuickButtonConfig) => {
    // TODO: Fire api to update QuickButtonConfig if all data valid
    myConsole.api(`Update data:`, index, config)
    dispatch(updateButtonConfig(config)) // FIXME: Dispatch this action after api succeeded
    setShowDialog(false)
  }

  const handleCloseDialog = () => {
    setShowDialog(false)
  }

  const onKeyDown = (keyName: string, e: KeyboardEvent, handle: any) => {
    myConsole.dev('Key down', keyName)
    showClickEffect()
    handleAddProgress()
  }

  const handleAddProgress = () => {
    // TODO: Fire api to add progress
    myConsole.api('Add progress of', index, ownConfig?.name)
  }

  return (
    <HotkeysHoc keyName={ownConfig?.hotkey} onKeyDown={onKeyDown}>
      <div className={styles.container}>
        <HotkeyHint name={ownConfig?.hotkey} clicked={showClicked} />

        <QuickBtn
          config={ownConfig}
          showDialog={handleShowDialog}
          onEdit={handleShowDialog}
          onAddProgress={handleAddProgress}
        />

        <BtnDialog
          config={ownConfig}
          open={showDialog}
          onSave={handleSaveButtonConfig}
          onUpdate={handleUpdateButtonConfig}
          onClose={handleCloseDialog}
        />
      </div>
    </HotkeysHoc>
  )
}

export default QuickBtnSet

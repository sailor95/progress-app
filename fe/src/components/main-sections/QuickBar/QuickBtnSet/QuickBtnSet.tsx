import React, { FC, useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'

import HotkeyHint from './HotkeyHint'
import QuickBtn from './QuickBtn'
import BtnDialog from './BtnDialog'
import HotKeysHoc from '../../../hoc/HotKeysHoc'
import { myConsole } from '../../../../utils/dev'
import { addButtonConfig } from '../actions'
import { useStoreState } from '../../../../store'

import styles from './styles.module.scss'

interface QuickBtnSetProp {
  index: number
}

const QuickBtnSet: FC<QuickBtnSetProp> = ({ index }) => {
  const storeButtonConfigs = useStoreState(
    (state) => state.quickBar.buttonConfigs
  )
  const storeButtonConfigOrder = useStoreState((state) => state.quickBar.order)
  const [showDialog, setShowDialog] = useState(false)

  const ownConfig = useMemo(
    () => storeButtonConfigs[storeButtonConfigOrder[index]],
    [storeButtonConfigs, storeButtonConfigOrder, index]
  )

  const dispatch = useDispatch()

  const handleShowDialog = () => {
    setShowDialog(true)
  }

  const handleSaveButtonConfig = (config: any) => {
    // TODO: Get unique record id for the quick button from BE and save it into buttonConfig
    // TODO: Fire api to save QuickButtonConfig if all data valid
    myConsole.dev(`Save data:`, index, config)
    dispatch(addButtonConfig(config)) // FIXME: Dispatch this action after api succeeded
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
    myConsole.dev('Add progress of', index, ownConfig?.name)
  }

  return (
    <HotKeysHoc keyName={ownConfig?.hotkey} onKeyDown={onKeyDown}>
      <div className={styles.container}>
        <HotkeyHint name={ownConfig?.hotkey} />

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
          onClose={handleCloseDialog}
        />
      </div>
    </HotKeysHoc>
  )
}

export default QuickBtnSet

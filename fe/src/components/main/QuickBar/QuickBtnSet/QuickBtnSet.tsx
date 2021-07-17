import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'

import HotkeysHoc from '@components/hoc/HotkeysHoc'
import { myConsole } from '@utils/dev'
import { useOwnMission } from '@hooks/index'
import HotkeyHint from './HotkeyHint'
import QuickBtn from './QuickBtn'
import BtnDialog from './BtnDialog'
import { addMission, updateMission } from '../actions'
import { Mission } from '../interfaces'

import styles from './styles.module.scss'

interface QuickBtnSetProp {
  index: number
}

const QuickBtnSet: FC<QuickBtnSetProp> = ({ index }) => {
  const [showDialog, setShowDialog] = useState(false)
  const [showClicked, setShowClicked] = useState(false)

  const ownMission = useOwnMission(index)

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

  const handleSaveMission = (mission: Mission) => {
    // TODO: Fire api to save Mission if all data valid
    myConsole.api(`Save data:`, index, mission)
    dispatch(addMission(mission)) // FIXME: Dispatch this action after api succeeded
    setShowDialog(false)
  }

  const handleUpdateMission = (mission: Mission) => {
    // TODO: Fire api to update Mission if all data valid
    myConsole.api(`Update data:`, index, mission)
    dispatch(updateMission(mission)) // FIXME: Dispatch this action after api succeeded
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
    myConsole.api('Add progress of', index, ownMission?.name)
  }

  return (
    <HotkeysHoc keyName={ownMission?.hotkey} onKeyDown={onKeyDown}>
      <div className={styles.container}>
        <HotkeyHint name={ownMission?.hotkey} clicked={showClicked} />

        <QuickBtn
          mission={ownMission}
          showDialog={handleShowDialog}
          onEdit={handleShowDialog}
          onAddProgress={handleAddProgress}
        />

        <BtnDialog
          mission={ownMission}
          open={showDialog}
          onSave={handleSaveMission}
          onUpdate={handleUpdateMission}
          onClose={handleCloseDialog}
        />
      </div>
    </HotkeysHoc>
  )
}

export default QuickBtnSet

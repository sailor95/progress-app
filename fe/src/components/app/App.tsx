import React from 'react'

import Toolbar from '../main-sections/Toolbar'
import QuickBar from '../main-sections/QuickBar'
import ProgressBoard from '../main-sections/ProgressBoard'
import MissionBoard from '../main-sections/MissionBoard'

import styles from './styles.module.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <Toolbar />

      <QuickBar />

      <ProgressBoard />

      <MissionBoard />
    </div>
  )
}

export default App

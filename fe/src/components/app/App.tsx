import React from 'react'
import { StylesProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'

import Toolbar from '../main-sections/Toolbar'
import QuickBar from '../main-sections/QuickBar'
import ProgressBoard from '../main-sections/ProgressBoard'
import MissionBoard from '../main-sections/MissionBoard'
import store from '../../store'

import styles from './styles.module.scss'

const App = () => {
  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <div className={styles.app}>
          <Toolbar />

          <QuickBar />

          <ProgressBoard />

          <MissionBoard />
        </div>
      </StylesProvider>
    </Provider>
  )
}

export default App

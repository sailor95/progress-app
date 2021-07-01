import React, { useState, useEffect } from 'react'
import { StylesProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'

import { LIGHT_THEME, DARK_THEME, Theme } from '@utils/styles/global-css-var'
import Toolbar from '../main/Toolbar'
import QuickBar from '../main/QuickBar'
import ProgressBoard from '../main/ProgressBoard'
import MissionBoard from '../main/MissionBoard'
import store from '../../store'

import styles from './styles.module.scss'

const App = () => {
  const [theme, setTheme] = useState<Theme>(LIGHT_THEME)

  // TODO: Use this in the future
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const switchTheme = () => {
    setTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME)
  }

  useEffect(() => {
    const applyTheme = () => {
      Object.keys(theme).forEach((key) => {
        const value = theme[key]
        document.documentElement.style.setProperty(key, value)
      })
    }

    applyTheme()
  }, [theme])

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

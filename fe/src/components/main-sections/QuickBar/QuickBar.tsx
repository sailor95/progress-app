import React from 'react'

import { useStoreState } from '../../../store'
import QuickBtnSet from './QuickBtnSet'

import styles from './styles.module.scss'

const QuickBar = () => {
  // FIXME: Remove next 2 lines after Redux dev tool is configured
  const state = useStoreState((state) => state)
  console.log(state)
  return (
    <div className={styles.container}>
      <div className={styles.quick_buttons}>
        {[...Array(5)].map((val, idx) => (
          <QuickBtnSet key={idx} index={idx} />
        ))}
      </div>
    </div>
  )
}

export default QuickBar

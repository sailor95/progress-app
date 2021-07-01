import React from 'react'

import Divider from '@components/ui/Divider'
import QuickBtnSet from './QuickBtnSet'

import styles from './styles.module.scss'

const QuickBar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.quick_buttons}>
          {[...Array(5)].map((val, idx) => (
            <QuickBtnSet key={idx} index={idx} />
          ))}
        </div>
      </div>
      <Divider />
    </>
  )
}

export default QuickBar

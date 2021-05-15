import React from 'react'

import QuickBtnSet from './QuickBtnSet'

import styles from './styles.module.scss'

const QuickBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.quickBtns}>
        {[...Array(5)].map((val, idx) => (
          <QuickBtnSet key={idx} index={idx} />
        ))}
      </div>
    </div>
  )
}

export default QuickBar

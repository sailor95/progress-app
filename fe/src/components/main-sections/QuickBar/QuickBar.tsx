import React from 'react'

import QuickBtn from './QuickBtn'

import styles from './styles.module.scss'

const QuickBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.quickBtns}>
        {[...Array(5)].map((val, idx) => (
          <div className={styles.btnContainer}>
            {/* TODO: Add hint to last the keyboard hotkey here */}
            <div className={styles.btnHint}>Hint {idx}</div>
            <QuickBtn />
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuickBar

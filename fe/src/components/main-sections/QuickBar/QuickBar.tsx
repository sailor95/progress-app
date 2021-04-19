import React from 'react'

import styles from './styles.module.scss'

const QuickBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.quickBtns}>
        <div className={styles.btnContainer}>
          <div className={styles.btnHint}>Hint 1</div>
          <div className={styles.quickBtn}>1</div>
        </div>
        <div className={styles.btnContainer}>
          <div className={styles.btnHint}>Hint 2</div>
          <div className={styles.quickBtn}>2</div>
        </div>
        <div className={styles.btnContainer}>
          <div className={styles.btnHint}>Hint 3</div>
          <div className={styles.quickBtn}>3</div>
        </div>
        <div className={styles.btnContainer}>
          <div className={styles.btnHint}>Hint 4</div>
          <div className={styles.quickBtn}>4</div>
        </div>
        <div className={styles.btnContainer}>
          <div className={styles.btnHint}>Hint 5</div>
          {/* TODO: Add hint for the keyboard hotkey here */}
          <div className={styles.quickBtn}>5</div>
        </div>
      </div>
    </div>
  )
}

export default QuickBar

import React from 'react'

import Divider from '@components/ui/Divider'

import styles from './styles.module.scss'

const ProgressBoard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.board}>Board</div>
      </div>
      <Divider />
    </>
  )
}

export default ProgressBoard

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'

const QuickBtn = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faPlus} size="2x" inverse />
    </div>
  )
}

export default QuickBtn

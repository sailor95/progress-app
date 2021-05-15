import React, { FC } from 'react'

import styles from './styles.module.scss'

interface HotkeyHintProps {
  name?: string
}

const HotkeyHint: FC<HotkeyHintProps> = ({ name }) => {
  console.log(name)
  return (
    <div className={styles.container}>
      {name && (
        <button className="kbc-button kbc-button-lg" type="button">
          {name}
        </button>
      )}
    </div>
  )
}

export default HotkeyHint

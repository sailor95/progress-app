import React, { FC } from 'react'

import styles from './styles.module.scss'

interface HotkeyHintProps {
  name?: string
}

// NOTE: This component uses keyboard CSS from: https://github.com/shhdharmen/keyboard-css
const HotkeyHint: FC<HotkeyHintProps> = ({ name }) => {
  return (
    <div className={styles.container}>
      {name && (
        <div
          className="kbc-button kbc-button-lg"
          style={{ fontSize: '1.5rem' }}
        >
          {name}
        </div>
      )}
    </div>
  )
}

export default HotkeyHint

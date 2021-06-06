import React, { FC, Fragment, memo } from 'react'

import styles from './styles.module.scss'

interface HotkeyHintProps {
  name?: string
}

const pLUS_SIGN = '+'

// NOTE: This component uses keyboard CSS from: https://github.com/shhdharmen/keyboard-css
const HotkeyHint: FC<HotkeyHintProps> = ({ name }) => {
  const isComboKey = name?.includes(pLUS_SIGN)

  return (
    <div className={styles.container}>
      {name?.split(pLUS_SIGN).map((key, idx) => (
        <Fragment key={key}>
          <div
            className="kbc-button kbc-button-lg"
            style={{ fontSize: '1.5rem' }}
          >
            {key}
          </div>
          {isComboKey && idx % 2 === 0 && (
            <div className={styles.plus}>{pLUS_SIGN}</div>
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default memo(HotkeyHint)

import React, { FC } from 'react'

import styles from './styles.module.scss'

interface ProgressBarProps {
  headerIcon: string // TODO: Will be icon in the future
  progressCount: number
  colorHex: string
}

const ProgressBar: FC<ProgressBarProps> = ({
  headerIcon,
  progressCount,
  colorHex,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon} style={{ backgroundColor: colorHex }}>
        {headerIcon[0]}
      </div>
      <div className={styles.cubes}>
        {[...Array(progressCount)].map((item, idx) => (
          <div
            key={idx}
            className={styles.cube}
            style={{ backgroundColor: colorHex }}
          />
        ))}
      </div>
    </div>
  )
}

export default ProgressBar

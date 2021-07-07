import React, { FC, Fragment } from 'react'

import { ProgressRecord } from '../ProgressBoard'
import ProgressBar from './ProgressBar'

import styles from './styles.module.scss'

interface ProgressBarsProps {
  progressList: ProgressRecord[]
}

const ProgressBars: FC<ProgressBarsProps> = ({ progressList }) => {
  return (
    <div className={styles.container}>
      {/* TODO: We need grid here */}
      {progressList.map((progress) => (
        <Fragment key={progress.id}>
          <ProgressBar
            headerIcon={progress.name}
            progressCount={progress.recordCount}
            colorHex={progress.colorHex}
          />
        </Fragment>
      ))}
    </div>
  )
}

export default ProgressBars

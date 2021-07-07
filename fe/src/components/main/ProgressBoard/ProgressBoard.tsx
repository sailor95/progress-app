import React from 'react'

import Divider from '@components/ui/Divider'
import ProgressBars from './ProgressBars'

import styles from './styles.module.scss'

export interface ProgressRecord {
  id: number
  name: string
  recordCount: number
  colorHex: string
}

const MOCK_PROGRESS_LIST: ProgressRecord[] = [
  {
    id: 1,
    name: 'A',
    recordCount: 2,
    colorHex: 'blue',
  },
  {
    id: 2,
    name: 'B',
    recordCount: 3,
    colorHex: 'red',
  },
  {
    id: 3,
    name: 'C',
    recordCount: 1,
    colorHex: 'darkgreen',
  },
]

const ProgressBoard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.board}>
          {/* TODO: We need the progress bar week info here (https://github.com/sailor95/progress-app/issues/38) */}
          <ProgressBars progressList={MOCK_PROGRESS_LIST} />
        </div>
      </div>
      <Divider />
    </>
  )
}

export default ProgressBoard

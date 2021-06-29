import React, { FC, ReactNode, useEffect, useState } from 'react'
import Hotkeys from 'react-hot-keys'

interface HotkeysHocProps {
  children: ReactNode
  keyName?: string
  onKeyUp?: (keyName: string, e: KeyboardEvent, handle: any) => void
  onKeyDown?: (keyName: string, e: KeyboardEvent, handle: any) => void
}

const HotkeysHoc: FC<HotkeysHocProps> = ({
  children,
  keyName,
  onKeyUp,
  onKeyDown,
}) => {
  const [tempUpdate, setTempUpdate] = useState(false)

  useEffect(() => {
    if (keyName && !tempUpdate) {
      setTempUpdate(true)
      setTimeout(() => setTempUpdate(false))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyName])

  return keyName && !tempUpdate ? (
    <Hotkeys keyName={keyName} onKeyUp={onKeyUp} onKeyDown={onKeyDown}>
      {children}
    </Hotkeys>
  ) : (
    <>{children}</>
  )
}

export default HotkeysHoc

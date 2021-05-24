import { useEffect, useState } from 'react'

import { QuickButtonConfig } from '@components/main/QuickBar/interfaces'
import { useStoreState } from '@store/index'

const useOwnButtonConfig = (index: number): QuickButtonConfig | undefined => {
  const storeButtonConfigs = useStoreState(
    (state) => state.quickBar.buttonConfigs
  )
  const storeButtonConfigsOrder = useStoreState((state) => state.quickBar.order)

  const [config, setConfig] = useState<QuickButtonConfig>()

  useEffect(() => {
    const currentButtonConfigId = storeButtonConfigsOrder[index]
    const currentButtonConfig = storeButtonConfigs[currentButtonConfigId]
    setConfig(currentButtonConfig)
  }, [storeButtonConfigsOrder, storeButtonConfigs, index])

  return config
}

export default useOwnButtonConfig

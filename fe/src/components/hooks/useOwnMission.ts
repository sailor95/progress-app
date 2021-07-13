import { useEffect, useState } from 'react'

import { Mission } from '@components/main/QuickBar/interfaces'
import { useStoreState } from '@store/index'

const useOwnMission = (index: number): Mission | undefined => {
  const storeMissions = useStoreState((state) => state.missions.missions)
  const storeMissionsOrder = useStoreState((state) => state.missions.order)

  const [mission, setMission] = useState<Mission>()

  useEffect(() => {
    const currentMissionId = storeMissionsOrder[index]
    const currentMission = storeMissions[currentMissionId]
    setMission(currentMission)
  }, [storeMissionsOrder, storeMissions, index])

  return mission
}

export default useOwnMission

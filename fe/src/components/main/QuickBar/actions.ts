import { QuickBarActions } from './constants'
import { Mission, AddMissionAction, UpdateMissionAction } from './interfaces'

export const addMission = (mission: Mission): AddMissionAction => {
  /**
   * TODO:
   * Get unique record id for the mission from BE
   * and save it into mission state.
   */
  const missionId = Date.now().toString(32) // FIXME: Replace with async API call
  const payload = {
    ...mission,
    id: missionId,
  }

  return {
    type: QuickBarActions.AddMission,
    payload,
  }
}

export const updateMission = (mission: Mission): UpdateMissionAction => {
  return {
    type: QuickBarActions.UpdateMission,
    payload: mission,
  }
}

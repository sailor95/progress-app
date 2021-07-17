import { QuickBarActions } from './constants'

export interface Mission {
  id?: string // TODO: given by BE
  name?: string
  hotkey?: string
  color?: string // hex code
}

// Redux related
export interface MissionsState {
  missions: {
    [missionId: string]: Mission
  }
  order: string[]
  hotkeySet: {
    [hotkey: string]: string
  }
}

export type IQuickBarActions = AddMissionAction | UpdateMissionAction

export interface AddMissionAction {
  type: QuickBarActions.AddMission
  payload: Mission
}

export interface UpdateMissionAction {
  type: QuickBarActions.UpdateMission
  payload: Mission
}

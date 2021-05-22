import { QuickBarActions } from './constants'

export interface QuickButtonConfig {
  id?: string // TODO: given by BE
  name?: string
  hotkey?: string
  color?: string // hex code
}

// Redux related
export interface QuickBarState {
  buttonConfigs: {
    [configId: string]: QuickButtonConfig
  }
  order: string[]
  hotkeySet: {
    [hotkey: string]: string
  }
}

export type IQuickBarActions = AddButtonConfigAction | UpdateButtonConfigAction

export interface AddButtonConfigAction {
  type: QuickBarActions.AddButtonConfig
  payload: QuickButtonConfig
}

export interface UpdateButtonConfigAction {
  type: QuickBarActions.UpdateButtonConfig
  payload: QuickButtonConfig
}

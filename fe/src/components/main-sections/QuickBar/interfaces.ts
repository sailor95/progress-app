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
  // All the hotkeys, for quick lookup
  hotkeySet: {
    [hotkey: string]: string
  }
}

export type IQuickBarActions = AddButtonConfigAction

export interface AddButtonConfigAction {
  type: QuickBarActions.AddButtonConfig
  payload: QuickButtonConfig
}

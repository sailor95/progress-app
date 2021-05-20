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
  test: string // FIXME: Remove this after testing phase
}

export type IQuickBarActions = AddButtonConfigAction

export interface AddButtonConfigAction {
  type: QuickBarActions.AddButtonConfig
  payload: QuickButtonConfig
}

import { QuickBarActions } from './constants'
import { QuickButtonConfig, AddButtonConfigAction } from './interfaces'

export const addButtonConfig = (
  config: QuickButtonConfig
): AddButtonConfigAction => {
  return {
    type: QuickBarActions.AddButtonConfig,
    payload: config,
  }
}

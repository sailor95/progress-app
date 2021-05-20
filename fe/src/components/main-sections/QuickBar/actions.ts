import { QuickBarActions } from './constants'
import { QuickButtonConfig, AddButtonConfigAction } from './interfaces'

export const addButtonConfig = (
  config: QuickButtonConfig
): AddButtonConfigAction => {
  // FIXME: Use name as Id in test phase
  const payload = config.hasOwnProperty('id')
    ? config
    : { ...config, id: config.name }

  return {
    type: QuickBarActions.AddButtonConfig,
    payload,
  }
}

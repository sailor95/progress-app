import { QuickBarActions } from './constants'
import {
  QuickButtonConfig,
  AddButtonConfigAction,
  UpdateButtonConfigAction,
} from './interfaces'

export const addButtonConfig = (
  config: QuickButtonConfig
): AddButtonConfigAction => {
  /**
   * TODO:
   * Get unique record id for the quick button config from BE
   * and save it into buttonConfig.
   */
  const configId = Date.now().toString(32) // FIXME: Replace with async API call
  const payload = {
    ...config,
    id: configId,
  }

  return {
    type: QuickBarActions.AddButtonConfig,
    payload,
  }
}

export const updateButtonConfig = (
  config: QuickButtonConfig
): UpdateButtonConfigAction => {
  return {
    type: QuickBarActions.UpdateButtonConfig,
    payload: config,
  }
}

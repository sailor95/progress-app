import { produce } from 'immer'

import { QuickBarActions } from './constants'
import { QuickBarState, IQuickBarActions } from './interfaces'

const initState: QuickBarState = {
  buttonConfigs: {},
  order: [],
  hotkeySet: {},
}

const reducer = produce((draft, action: IQuickBarActions) => {
  const { type, payload } = action

  switch (type) {
    case QuickBarActions.AddButtonConfig: {
      const { id, hotkey } = payload

      draft.buttonConfigs = {
        ...draft.buttonConfigs,
        ...(payload.id && { [payload.id as string]: payload }),
      }
      draft.order.push(id as string)
      draft.hotkeySet[hotkey as string] = hotkey as string

      break
    }

    case QuickBarActions.UpdateButtonConfig: {
      const { id, hotkey } = payload
      const prevHotkey = draft.buttonConfigs[id as string].hotkey

      if (draft.buttonConfigs[id as string]) {
        // Update hotkey set
        if (prevHotkey !== hotkey) {
          delete draft.hotkeySet[prevHotkey as string]
          draft.hotkeySet[hotkey as string] = hotkey as string
        }

        draft.buttonConfigs[id as string] = payload
      }
      break
    }
  }
}, initState)

export default reducer

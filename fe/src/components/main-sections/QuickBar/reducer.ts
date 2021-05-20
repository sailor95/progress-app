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
      draft.hotkeySet = {
        ...draft.hotkeySet,
        ...(hotkey && { [hotkey as string]: hotkey }),
      }

      break
    }
  }
}, initState)

export default reducer

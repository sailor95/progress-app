import { produce } from 'immer'

import { QuickBarActions } from '@components/main/QuickBar/constants'
import {
  MissionsState,
  IQuickBarActions,
} from '@components/main/QuickBar/interfaces'

const initState: MissionsState = {
  missions: {},
  order: [],
  hotkeySet: {},
}

const reducer = produce((draft, action: IQuickBarActions) => {
  const { type, payload } = action

  switch (type) {
    case QuickBarActions.AddMission: {
      const { id, hotkey } = payload

      draft.missions = {
        ...draft.missions,
        ...(payload.id && { [payload.id as string]: payload }),
      }
      draft.order.push(id as string)
      draft.hotkeySet[hotkey as string] = hotkey as string

      break
    }

    case QuickBarActions.UpdateMission: {
      const { id, hotkey } = payload
      const prevHotkey = draft.missions[id as string].hotkey

      if (draft.missions[id as string]) {
        // Update hotkey set
        if (prevHotkey !== hotkey) {
          delete draft.hotkeySet[prevHotkey as string]
          draft.hotkeySet[hotkey as string] = hotkey as string
        }

        draft.missions[id as string] = payload
      }
      break
    }
  }
}, initState)

export default reducer

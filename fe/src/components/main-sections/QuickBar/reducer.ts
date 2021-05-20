import { produce } from 'immer'

import { QuickBarActions } from './constants'
import { QuickBarState, IQuickBarActions } from './interfaces'

const initState: QuickBarState = {
  buttonConfigs: {},
  test: 'Hi Dave H.',
}

const reducer = produce((draft, action: IQuickBarActions) => {
  const { type, payload } = action

  switch (type) {
    case QuickBarActions.AddButtonConfig: {
      draft.buttonConfigs = {
        ...draft.buttonConfigs,
        [payload.id as string]: payload,
      }
      break
    }
  }
}, initState)

export default reducer

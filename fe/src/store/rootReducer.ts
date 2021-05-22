import { combineReducers } from 'redux'

import quickBarReducer from '@components/main/QuickBar/reducer'

const rootReducer = combineReducers({
  quickBar: quickBarReducer,
})

export default rootReducer

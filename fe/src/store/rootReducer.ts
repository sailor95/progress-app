import { combineReducers } from 'redux'

import quickBarReducer from '../components/main-sections/QuickBar/reducer'

const rootReducer = combineReducers({
  quickBar: quickBarReducer,
})

export default rootReducer

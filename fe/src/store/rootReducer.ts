import { combineReducers } from 'redux'

import missionsReducer from '@store/reducers/missionsReducer'

const rootReducer = combineReducers({
  missions: missionsReducer,
})

export default rootReducer

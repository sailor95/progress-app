import { createStore } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

import { StoreState } from './interfaces'
import rootReducer from './rootReducer'

const store = createStore(rootReducer)

const useStoreState: TypedUseSelectorHook<StoreState> = useSelector

export { useStoreState }
export default store

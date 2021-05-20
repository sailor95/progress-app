import { createStore, compose, applyMiddleware } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

import { StoreState } from './interfaces'
import rootReducer from './rootReducer'

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleWares: any[] = []

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWares))
)

const useStoreState: TypedUseSelectorHook<StoreState> = useSelector

export { useStoreState }
export default store

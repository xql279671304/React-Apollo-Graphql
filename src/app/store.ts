import {
  combineReducers,
  configureStore,
  Store
} from '@reduxjs/toolkit'
import { topNav } from './slices/topNav'

export const actions = {
  topNav: topNav.actions
}

const rootReducer = combineReducers({
  topNav: topNav.reducer
})

function createStore(initialState = {}): Store {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState
  });
}

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore()

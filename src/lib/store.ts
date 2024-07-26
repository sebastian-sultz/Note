import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appSlice from './features/appSlice'
// ...
export const rootReducer = combineReducers({
  app:appSlice,
})
export const myStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools:true,
  })
}
export default myStore;

// Infer the type of makeStore
export type AppStore = ReturnType<typeof myStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
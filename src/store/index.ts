import { configureStore, combineReducers, AnyAction, Reducer } from '@reduxjs/toolkit'
import { orderReducer } from './order/order.slice'

const combinedReducer = combineReducers({
  order: orderReducer,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === "reset") {
    state = {} as RootState;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

export const resetState = () => ({
  type: "reset"
})

export type RootState = ReturnType<typeof combinedReducer>
export type AppDispatch = typeof store.dispatch
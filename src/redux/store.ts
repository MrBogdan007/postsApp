import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postReducer from './reducers/posts';
import userReducer from './reducers/users';


export const store = configureStore({
  reducer: {
    postReducer,
    userReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

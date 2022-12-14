import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import commentReducer from './reducers/comments';
import postReducer from './reducers/posts';
import singleUserReducer from './reducers/singleUser';
import userReducer from './reducers/users';


export const store = configureStore({
  reducer: {
    postReducer,
    userReducer,
    commentReducer,
    singleUserReducer
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

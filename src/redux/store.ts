import { configureStore } from '@reduxjs/toolkit';
import videConfigReducer from '@/redux/slices/videoConfigSlice';

export const store = configureStore({
  reducer: {
    videConfig: videConfigReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

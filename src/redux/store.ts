import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slice";

export const store = configureStore({
  reducer: {
    userha: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

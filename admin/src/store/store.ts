import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "../slices/infoSlice/infoSlice";

export const store = configureStore({
  reducer: {
    info: infoReducer,
  },
  devTools: true,
});

// Infer RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import { mainApi } from "./api";
import chat from "./features/chat-data";

export const store = configureStore({
  reducer: {
    chat,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

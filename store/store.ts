import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
// ...
const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;

export default store;

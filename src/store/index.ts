import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;

export type RooState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
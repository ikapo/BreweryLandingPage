import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    favoriteBeers: favoriteBeersReducer,
  },
});

// Infer state and dispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

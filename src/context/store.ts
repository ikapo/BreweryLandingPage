import { configureStore } from "@reduxjs/toolkit";
import { favoriteBeersReducer } from "@/features/favoriteBeers";

export const store = configureStore({
  reducer: {
    favoriteBeers: favoriteBeersReducer,
  },
});

// Infer state and dispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

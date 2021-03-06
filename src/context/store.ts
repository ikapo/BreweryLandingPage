/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { favoriteBeersReducer } from "@/features/favoriteBeers";
import { searchReducer } from "@/features/search";
import { pageReducer } from "@/features/pagination";

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  fbeers: favoriteBeersReducer,
  search: searchReducer,
  pageState: pageReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

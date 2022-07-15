import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";
import { FavoriteBeer } from "@/types/favoriteBeer";

// Define a type for the slice state
interface FavoriteBeersState {
  favoriteBeers: Set<FavoriteBeer>;
}

// Define the initial state using that type
const initialState: FavoriteBeersState = {
  favoriteBeers: new Set(),
};

export const favoriteBeersSlice = createSlice({
  name: "favoriteBeers",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // NOTE sets only let an object appear once, so adding a FavoriteBeer will upsert
    // no need to worry about changing an existing favorite's rank or adding a new one
    add: (state, beer: PayloadAction<FavoriteBeer>) => {
      state.favoriteBeers.add(beer.payload);
    },
    remove: (state, beer: PayloadAction<FavoriteBeer>) => {
      state.favoriteBeers.delete(beer.payload);
    },
    clear: (state) => {
      state.favoriteBeers.clear();
    },
  },
});

export const { add, remove, clear } = favoriteBeersSlice.actions;

export const selectFavoriteBeers = (state: RootState) => state.favoriteBeers;

export default favoriteBeersSlice.reducer;

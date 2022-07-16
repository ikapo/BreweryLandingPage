/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/context/store";
import { IFavoriteBeer } from "@/features/favoriteBeers";
import { IBeer } from "@/features/beers";

// Define a type for the slice state
interface FavoriteBeersState {
  favoriteBeers: IFavoriteBeer[];
}

// Define the initial state using that type
const initialState: FavoriteBeersState = {
  favoriteBeers: [],
};

export const favoriteBeersSlice = createSlice({
  name: "favoriteBeers",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, beer: PayloadAction<IBeer>) => {
      state.favoriteBeers.push(<IFavoriteBeer>beer.payload);
    },
    update: (state, beer: PayloadAction<IFavoriteBeer>) => {
      const index = state.favoriteBeers.findIndex(
        (b) => b.id === beer.payload.id
      );
      if (index >= 0) {
        state.favoriteBeers[index].rank = beer.payload.rank;
      }
    },
    remove: (state, beer: PayloadAction<IFavoriteBeer>) => {
      state.favoriteBeers.filter((b) => b.id !== beer.payload.id);
    },
    clear: (state) => {
      state.favoriteBeers.length = 0;
    },
  },
});

export const { add, remove, clear } = favoriteBeersSlice.actions;
export const selectFavoriteBeers = (state: RootState) => state.favoriteBeers;
export default favoriteBeersSlice.reducer;

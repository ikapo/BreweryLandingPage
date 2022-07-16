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
    insert: (state, beer: PayloadAction<IBeer>) => {
      const indexOfBeer = state.favoriteBeers.findIndex(
        (b) => b.id === beer.payload.id
      );
      if (indexOfBeer === -1) {
        state.favoriteBeers.push(<IFavoriteBeer>beer.payload);
      }
    },
    updateRank: (
      state,
      rankWithId: PayloadAction<{ id: number; rank: 1 | 2 | 3 | 4 | 5 }>
    ) => {
      const indexOfBeer = state.favoriteBeers.findIndex(
        (b) => b.id === rankWithId.payload.id
      );
      if (indexOfBeer !== -1) {
        state.favoriteBeers[indexOfBeer].rank = rankWithId.payload.rank;
      }
    },
    remove: (state, beer: PayloadAction<IFavoriteBeer>) => {
      state.favoriteBeers = state.favoriteBeers.filter(
        (b) => b.id !== beer.payload.id
      );
    },
    clear: (state) => {
      state.favoriteBeers.length = 0;
    },
  },
});

export const { insert, updateRank, remove, clear } = favoriteBeersSlice.actions;
export const selectFavoriteBeers = (state: RootState) => state.favoriteBeers;
export default favoriteBeersSlice.reducer;

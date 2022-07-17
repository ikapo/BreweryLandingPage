/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/context/store";

// Define a type for the slice state
interface SearchState {
  searchStr: string;
}

// Define the initial state using that type
const initialState: SearchState = {
  searchStr: "",
};

export const searchSlice = createSlice({
  name: "search",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    update: (state, newSearchStr: PayloadAction<string>) => {
      state.searchStr = newSearchStr.payload;
    },
    clear: (state) => {
      state.searchStr = "";
    },
  },
});

export const { update, clear } = searchSlice.actions;
export const selectFavoriteBeers = (state: RootState) => state.search;
export default searchSlice.reducer;

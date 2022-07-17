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
    updateSearch: (state, newSearchStr: PayloadAction<string>) => {
      state.searchStr = newSearchStr.payload;
    },
    clearSearch: (state) => {
      state.searchStr = "";
    },
  },
});

export const { updateSearch, clearSearch } = searchSlice.actions;
export const selectFavoriteBeers = (state: RootState) => state.search;
export default searchSlice.reducer;

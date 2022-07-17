/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/context/store";

// Define a type for the slice state
interface PageState {
  page: 1;
}

// Define the initial state using that type
const initialState: PageState = {
  page: 1,
};

export const pageSlice = createSlice({
  name: "page",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
    previousPage: (state) => {
      state.page += -1;
    },
    resetPage: (state) => {
      state.page = 1;
    },
  },
});

export const { nextPage, previousPage, resetPage } = pageSlice.actions;
export const selectPage = (state: RootState) => state.pageState;
export default pageSlice.reducer;

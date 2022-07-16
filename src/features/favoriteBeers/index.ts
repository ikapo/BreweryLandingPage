/* eslint-disable import/no-cycle */
export {
  default as favoriteBeersReducer,
  add,
  remove,
  update,
  clear,
} from "./context/favoriteBeersSlice";
export type { IFavoriteBeer } from "./types/favoriteBeer";

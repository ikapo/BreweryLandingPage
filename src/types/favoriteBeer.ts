import { Beer } from "./beer";

interface Rank {
  rank?: 1 | 2 | 3 | 4 | 5;
}

export type FavoriteBeer = Beer & Rank;

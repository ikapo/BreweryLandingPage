import { IBeer } from "@/features/beers";

export interface IFavoriteBeer extends IBeer {
  rank?: 1 | 2 | 3 | 4 | 5;
}

/* eslint-disable react/require-default-props */
import type { IBeer } from "@/features/beers";
import type { IFavoriteBeer } from "@/features/favoriteBeers";
import { BeerCard } from "@/features/beers";
import { FavoriteBeerCard } from "@/features/favoriteBeers";

interface BeerGridProps {
  beers: IBeer[] | IFavoriteBeer[];
  favorite?: boolean;
}

export function BeerGrid({ beers, favorite = false }: BeerGridProps) {
  return (
    <div className="flex overflow-scroll no-scrollbar justify-center items-center my-4 max-h-[calc(100vh-10rem)]">
      <div className="gap-y-4 gap-x-36 space-y-4 sm:grid sm:grid-cols-2 sm:mt-6 sm:space-y-0 lg:mx-auto xl:grid-cols-3">
        {beers.map((beer) =>
          favorite ? (
            <FavoriteBeerCard key={beer.name} beer={beer} />
          ) : (
            <BeerCard key={beer.name} beer={beer} />
          )
        )}
      </div>
    </div>
  );
}

import { IBeer } from "../types/beer";
import { BeerCard } from "./BeerCard";

interface BeerGridProps {
  beers: IBeer[];
}

export function BeerGrid({ beers }: BeerGridProps) {
  return (
    <div className="flex justify-center items-center">
      <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:mt-16 sm:space-y-0 lg:mx-auto xl:grid-cols-3">
        {beers.map((beer) => (
          <BeerCard key={beer.name} beer={beer} />
        ))}
      </div>
    </div>
  );
}

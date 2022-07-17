import { BeerCard, IBeer } from "@/features/beers";
import { BeerRank } from "./BeerRank";

interface FavoriteBeerCardProps {
  beer: IBeer;
}

export function FavoriteBeerCard({ beer }: FavoriteBeerCardProps) {
  return <BeerCard beer={beer} Rank={<BeerRank beer={beer} />} />;
}

/* eslint-disable jsx-a11y/label-has-associated-control */
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { IFavoriteBeer } from "../types/favoriteBeer";
import { updateRank } from "../context/favoriteBeersSlice";

interface BeerRankProps {
  beer: IFavoriteBeer;
}

export function BeerRank({ beer }: BeerRankProps) {
  const dispatch = useAppDispatch();
  const setNewRank = (newRank: string) => {
    const rank = parseInt(newRank, 10) as 1 | 2 | 3 | 4 | 5;
    dispatch(
      updateRank({
        id: beer.id,
        rank,
      })
    );
  };
  return (
    <div className="flex flex-row justify-center items-center p-1 bg-gray-200">
      <label className="mr-2 text-base font-medium text-gray-900">Rank:</label>
      <form className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-0">
        <select
          id="location"
          name="location"
          value={beer.rank}
          onChange={(rank) => setNewRank(rank.target.value)}
          className="block py-0.5 pr-10 pl-3 w-full text-base rounded-md border-gray-300 sm:text-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
          defaultValue="Canada"
        >
          {[1, 2, 3, 4, 5].map((rank) => (
            <option className="my-2 mx-1 w-4 h-4 text-gray-600 checked:border-none">
              {rank}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

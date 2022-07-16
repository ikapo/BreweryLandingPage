/* eslint-disable jsx-a11y/label-has-associated-control */
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { IFavoriteBeer } from "../types/favoriteBeer";
import { updateRank } from "../context/favoriteBeersSlice";

interface BeerRankProps {
  beer: IFavoriteBeer;
}

export function BeerRank({ beer }: BeerRankProps) {
  const dispatch = useAppDispatch();
  const setNewRank = (newRank: number) => {
    const rank = newRank as 1 | 2 | 3 | 4 | 5;
    dispatch(
      updateRank({
        id: beer.id,
        rank,
      })
    );
  };
  return (
    <div className="flex flex-row justify-center items-center p-4 bg-gray-200">
      <label className="mr-2 text-base font-medium text-gray-900">Rank:</label>
      <form className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-0">
        {[1, 2, 3, 4, 5].map((rank) => (
          <div key={rank} className="flex items-center">
            <input
              name="notification-method"
              id={`${rank}`}
              type="radio"
              onChange={() => setNewRank(rank)}
              checked={rank === beer.rank}
              className="my-2 mx-1 w-4 h-4 text-gray-600 checked:border-none"
            />
            <label
              htmlFor={`${rank}`}
              className="block ml-1 text-sm font-medium text-gray-700"
            >
              {rank}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}

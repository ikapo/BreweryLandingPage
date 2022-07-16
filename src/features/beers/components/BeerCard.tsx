import { IBeer } from "@/features/beers";

interface BeerCardProps {
  beer: IBeer;
}

export function BeerCard({ beer }: BeerCardProps) {
  return (
    <div
      key={beer.id}
      className="flex flex-col justify-items-center max-w-xs bg-blue-50 rounded-lg border-4 border-blue-400 shadow-lg aspect-square"
    >
      <img src={beer.image_url} alt={beer.name} className="pt-4 mx-auto h-60" />
      <span className="mt-1 w-full bg-gray-500 p-[1px]" />
      <div className="p-6">
        <h2 className="text-lg font-medium leading-6 text-gray-900">
          {beer.name}
        </h2>
      </div>
      <button
        type="button"
        className="self-center py-2 px-3 my-4 text-sm text-white bg-blue-600 rounded border border-transparent shadow-sm hover:bg-blue-700"
      >
        Add To Favorites +
      </button>
    </div>
  );
}

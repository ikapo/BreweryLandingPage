import { useQuery } from "react-query";
import { useState } from "react";
import { BeerGrid, type IBeer } from "@/features/beers";
import { Spinner } from "@/components/Spinner";
import { isErrorObject } from "@/utils/isErrorObject";
import { Pagination } from "@/components/Pagination";
import { fetchBeers } from "@/utils/fetchBeers";
import { isValidPage, MAX_PAGE } from "@/config/pagination";
import { Background } from "@/components/Background";

export function BrowsePage() {
  const [page, setPage] = useState(1);

  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["beerPage", page],
    () => fetchBeers(page),
    {
      // Caching
      keepPreviousData: true,
    }
  );

  if (isError) {
    let message = "unknown";
    if (isErrorObject(error)) {
      message = error.message;
    }
    return (
      <>
        <Background />
        <div className="flex flex-col justify-center h-[calc(100vh-10rem)]">
          <h2 className="text-8xl text-center text-red-400">
            An Error occurred:
          </h2>
          <h3 className="text-8xl text-center text-red-400">{message}</h3>
        </div>
      </>
    );
  }

  let beers = data as IBeer[];
  // Edge case for getting to max beers
  if (page === MAX_PAGE) {
    beers = beers.splice(0, 3);
  }
  return (
    <div>
      <Background />
      {isLoading || isFetching ? (
        <div
          role="status"
          className="flex justify-center items-center h-[calc(100vh-10rem)]"
        >
          <Spinner />
        </div>
      ) : (
        <>
          <BeerGrid beers={beers} />
          <Pagination
            next={() => isValidPage(page + 1) && setPage(page + 1)}
            previous={() => isValidPage(page - 1) && setPage(page - 1)}
            showingStart={(page - 1) * 6 + 1}
            showingEnd={page * 6 > 100 ? 100 : page * 6}
            total={100}
          />
        </>
      )}
    </div>
  );
}

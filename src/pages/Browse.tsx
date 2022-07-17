import { useQuery } from "react-query";
import type { IBeer } from "@/features/beers";
import { BeerGrid } from "@/components/BeerGrid";
import { Spinner } from "@/components/Spinner";
import { isErrorObject } from "@/utils/isErrorObject";
import { nextPage, PaginatedFooter, previousPage } from "@/features/pagination";
import { fetchBeers } from "@/utils/fetchBeers";
import { isValidPage, MAX_PAGE } from "@/config/pagination";
import { Background } from "@/components/Background";
import { NavBar } from "@/layouts/NavBar";
import { SearchBar } from "@/features/search";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";

export function BrowsePage() {
  const page = useAppSelector((s) => s.pageState.page);
  const dispatch = useAppDispatch();
  const searchStr = useAppSelector((s) => s.search.searchStr);

  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["beerPage", page, searchStr],
    () => fetchBeers(page, searchStr),
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
        <NavBar />
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
    <>
      <NavBar>
        <SearchBar />
      </NavBar>
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
          <PaginatedFooter
            next={() => isValidPage(page + 1) && dispatch(nextPage())}
            previous={() => isValidPage(page - 1) && dispatch(previousPage())}
            showingStart={(page - 1) * 6 + 1}
            showingEnd={page * 6 > 100 ? 100 : page * 6}
            total={100}
          />
        </>
      )}
    </>
  );
}

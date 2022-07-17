import { useQuery } from "react-query";
import type { IBeer } from "@/features/beers";
import { BeerGrid } from "@/components/BeerGrid";
import { Spinner } from "@/components/Spinner";
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

  const { isLoading, data, isFetching } = useQuery(
    ["beerPage", page, searchStr],
    () => fetchBeers(page, searchStr),
    {
      retry: 0,
      useErrorBoundary: true,
      // eslint-disable-next-line no-console
      onError: (err) => console.error(err),
    }
  );

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

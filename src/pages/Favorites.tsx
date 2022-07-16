import { Background } from "@/components/Background";
import { BeerGrid } from "@/components/BeerGrid";
import { Pagination } from "@/components/Pagination";
import { isValidPage, PER_PAGE } from "@/config/pagination";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useState } from "react";

export function FavoritesPage() {
  const [page, setPage] = useState(1);
  const favorites = useAppSelector((s) => s.favoriteBeers.favoriteBeers);
  const total = favorites.length;
  const MAX_PAGE = Math.ceil(total / PER_PAGE);
  const firstItemIndex = (page - 1) * PER_PAGE;
  const lastItemIndex = page * PER_PAGE;
  return (
    <>
      <BeerGrid
        favorite
        beers={favorites.slice(firstItemIndex, lastItemIndex)}
      />
      <Background />
      <Pagination
        next={() => isValidPage(page + 1, MAX_PAGE) && setPage(page + 1)}
        previous={() => isValidPage(page - 1, MAX_PAGE) && setPage(page - 1)}
        showingStart={total !== 0 ? firstItemIndex + 1 : 0}
        showingEnd={page > 1 ? lastItemIndex : total}
        total={total}
      />
    </>
  );
}

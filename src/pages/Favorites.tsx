import { Background } from "@/components/Background";
import { BeerGrid } from "@/components/BeerGrid";
import { PaginatedFooter } from "@/features/pagination";
import { isValidPage, PER_PAGE } from "@/config/pagination";
import { ClearButton } from "@/features/favoriteBeers";
import { useAppSelector } from "@/hooks/useAppSelector";
import { NavBar } from "@/layouts/NavBar";
import { useState } from "react";

export function FavoritesPage() {
  const [page, setPage] = useState(1);
  const favorites = useAppSelector((s) => s.fbeers.favoriteBeers);
  const total = favorites.length;
  const firstItemIndex = (page - 1) * PER_PAGE;
  const lastItemIndex = page * PER_PAGE;
  return (
    <>
      <NavBar>
        <ClearButton />
      </NavBar>
      <BeerGrid
        favorite
        beers={favorites.slice(firstItemIndex, lastItemIndex)}
      />
      <Background />
      <PaginatedFooter
        next={() => isValidPage(page + 1) && setPage(page + 1)}
        previous={() => isValidPage(page - 1) && setPage(page - 1)}
        showingStart={total > 0 ? (page - 1) * PER_PAGE + 1 : 0}
        showingEnd={total < page * PER_PAGE ? total : page * PER_PAGE}
        total={total}
      />
    </>
  );
}

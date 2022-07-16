import { useAppSelector } from "@/hooks/useAppSelector";

export function FavoritesPage() {
  const favorites = useAppSelector((s) => s.favoriteBeers.favoriteBeers);
  return (
    <>
      <h1>Welcome to favorites page</h1>
      <p>Favorite beers will be placed here</p>
    </>
  );
}

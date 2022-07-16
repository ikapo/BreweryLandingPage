import { BeerGrid } from "@/features/beers";

export function BrowsePage() {
  return (
    <>
      <h1>Welcome to browse page</h1>
      <BeerGrid beers={[]} />
    </>
  );
}

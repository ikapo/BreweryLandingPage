import { Beer } from "@/features/beers";

export async function getRandomBeer(): Promise<Beer> {
  const response = await fetch("https://api.punkapi.com/v2/beers/random");
  const data = await response.json();
  return data as Beer;
}

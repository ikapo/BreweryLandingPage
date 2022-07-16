import { screen } from "@testing-library/react";
import { getRandomBeer } from "@/test/beerUtils";
import { BeerGrid } from "@/features/beers";
import { renderWithProviders } from "@/test/renderWithProviders";
import { setupStore } from "@/context/store";

const beer1 = getRandomBeer();
const beer2 = getRandomBeer();
const beer3 = getRandomBeer();
const setup = () => {
  const store = setupStore();
  return renderWithProviders(<BeerGrid beers={[beer1, beer2, beer3]} />, {
    store,
  });
};

describe("BeerGrid", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it("should display the beers properly", () => {
    setup();
    expect(screen.getByText(beer1.name)).toBeTruthy();
    expect(screen.getByText(beer2.name)).toBeTruthy();
    expect(screen.getByText(beer3.name)).toBeTruthy();
  });
});

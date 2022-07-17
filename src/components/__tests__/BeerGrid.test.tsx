import { screen } from "@testing-library/react";
import { getBeerAtIndex } from "@/test/beerUtils";
import { BeerGrid } from "@/components/BeerGrid";
import { renderWithProviders } from "@/test/renderWithProviders";
import { setupStore } from "@/context/store";

// Making sure there are no duplicates
const beer1 = getBeerAtIndex(Math.floor(Math.random() * 5));
const beer2 = getBeerAtIndex(Math.floor(Math.random() * 5 + 6));
const beer3 = getBeerAtIndex(Math.floor(Math.random() * 5 + 11));
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
    expect(screen.queryAllByText(beer1.name)).toBeTruthy();
    expect(screen.queryAllByText(beer2.name)).toBeTruthy();
    expect(screen.queryAllByText(beer3.name)).toBeTruthy();
  });
});

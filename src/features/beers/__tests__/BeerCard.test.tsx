import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/renderWithProviders";
import { getRandomBeer } from "@/test/beerUtils";
import { setupStore } from "@/context/store";
import { BeerCard } from "@/features/beers";
import type { PreloadedState } from "@reduxjs/toolkit";
import type { RootState } from "@/context/store";

const beer = getRandomBeer();
const setup = (preloadedState?: PreloadedState<RootState>) => {
  const store = setupStore();
  return renderWithProviders(<BeerCard beer={beer} />, {
    store,
    preloadedState,
  });
};

describe("BeerCard", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it("should display the beer properly", () => {
    setup();
    expect(beer.image_url).toBeInTheDocument();
    expect(beer.name).toBeInTheDocument();
  });

  it("should show the modal when a beer is clicked on", () => {
    setup();
    const beerModal = screen.getByText(beer.name);
    fireEvent.click(beerModal);
    expect(beer.description).toBeInTheDocument();
    expect(beer.first_brewed).toBeInTheDocument();
    expect(beer.food_pairing).toBeInTheDocument();
  });

  it("should add a beer to favorites when add to favorites is clicked on", () => {
    const { store } = setup();
    const addToFavorites = screen.getByText("Add To Favorites");
    fireEvent.click(addToFavorites);
    const {
      favoriteBeers: { favoriteBeers },
    } = store.getState();
    expect(
      favoriteBeers.findIndex((b) => b.id === beer.id)
    ).toBeGreaterThanOrEqual(0);
  });
});

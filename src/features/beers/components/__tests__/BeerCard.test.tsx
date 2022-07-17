import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/renderWithProviders";
import { getBeerAtIndex } from "@/test/beerUtils";
import { setupStore } from "@/context/store";
import { BeerCard } from "@/features/beers";
import type { PreloadedState } from "@reduxjs/toolkit";
import type { RootState } from "@/context/store";

const beer = getBeerAtIndex(Math.floor(Math.random() * 10));
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
    const img = screen.getByAltText(beer.name) as HTMLImageElement;
    expect(img.src).toContain(beer.image_url);
    expect(screen.getByText(beer.name)).toBeTruthy();
  });

  it("should show the modal when a beer is clicked on", () => {
    setup();
    const beerModal = screen.getByText(beer.name);
    fireEvent.click(beerModal);
    expect(
      screen.getByText(
        `${beer.method.fermentation.temp.value} degrees ${beer.method.fermentation.temp.unit}`
      )
    ).toBeTruthy();
    expect(screen.getByText(beer.food_pairing.join(", "))).toBeTruthy();
  });

  it("should add and remove a beer to favorites", () => {
    // Add the beer
    const { store } = setup();
    const addToFavorites = screen.getByText("Add To Favorites +");
    fireEvent.click(addToFavorites);
    const {
      fbeers: { favoriteBeers },
    } = store.getState();
    expect(
      favoriteBeers.findIndex((b) => b.id === beer.id)
    ).toBeGreaterThanOrEqual(0);

    // Remove the beer
    const removeFromFavorites = screen.getByText("Remove From Favorites");
    fireEvent.click(removeFromFavorites);
    const state = store.getState();
    expect(state.fbeers.favoriteBeers.findIndex((b) => b.id === beer.id)).toBe(
      -1
    );
  });
});

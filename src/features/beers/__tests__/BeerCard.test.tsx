import { fireEvent, renderHook, screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/renderWithProviders";
import { getRandomBeer } from "@/test/beerUtils";
import { setupStore } from "@/context/store";
import { clear } from "@/features/favoriteBeers";
import { useAppSelector } from "@/hooks/useAppSelector";
import { BeerCard } from "@/features/beers";

const beer = getRandomBeer();
const store = setupStore();
const setup = () => renderWithProviders(<BeerCard beer={beer} />, { store });

describe("BeerCard", () => {
  beforeEach(() => {
    setup();
    store.dispatch(clear());
  });
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it("should display the beer properly", () => {
    expect(beer.imageURL).toBeInTheDocument();
    expect(beer.name).toBeInTheDocument();
  });

  it("should show the modal when a beer is clicked on", () => {
    const beerModal = screen.getByText("beer.name");
    fireEvent.click(beerModal);
    expect(beer.description).toBeInTheDocument();
    expect(beer.firstBrewed).toBeInTheDocument();
    expect(beer.foodPairing).toBeInTheDocument();
  });

  it("should add a beer to favorites when add to favorites is clicked on", () => {
    const {
      result: { current },
    } = renderHook(() => useAppSelector((s) => s.favoriteBeers));
    const addToFavorites = screen.getByText("Add To Favorites");
    fireEvent.click(addToFavorites);
    expect(current.favoriteBeers.has(beer)).toBeTruthy();
  });
});

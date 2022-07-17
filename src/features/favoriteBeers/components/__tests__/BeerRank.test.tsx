import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/renderWithProviders";
import { getBeerAtIndex } from "@/test/beerUtils";
import { setupStore } from "@/context/store";
import type { PreloadedState } from "@reduxjs/toolkit";
import type { RootState } from "@/context/store";
import { BeerRank } from "../BeerRank";

const beer = getBeerAtIndex(Math.floor(Math.random() * 10));
const setup = (preloadedState?: PreloadedState<RootState>) => {
  const store = setupStore();
  return renderWithProviders(<BeerRank beer={beer} />, {
    store,
    preloadedState,
  });
};

describe("BeerRank", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it("should display the rank points", () => {
    setup();
    expect(screen.getByText("1")).toBeTruthy();
    expect(screen.getByText("2")).toBeTruthy();
    expect(screen.getByText("3")).toBeTruthy();
    expect(screen.getByText("4")).toBeTruthy();
    expect(screen.getByText("5")).toBeTruthy();
  });
});

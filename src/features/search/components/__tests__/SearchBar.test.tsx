import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "@/test/renderWithProviders";
import { setupStore } from "@/context/store";
import type { PreloadedState } from "@reduxjs/toolkit";
import type { RootState } from "@/context/store";
import { SearchBar } from "@/features/search";

const setup = (preloadedState?: PreloadedState<RootState>) => {
  const store = setupStore();
  return renderWithProviders(<SearchBar />, {
    store,
    preloadedState,
  });
};

describe("SearchBar", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it("should change the search successfuly", () => {
    // Add the beer
    const { store } = setup();
    const fakeSearch = "fish tacos";
    const searchbar = screen.getByLabelText("Search");
    fireEvent.change(searchbar, {
      target: { value: fakeSearch },
    });
    fireEvent.submit(screen.getByRole("form"));
    const {
      search: { searchStr },
    } = store.getState();
    waitFor(() => expect(searchStr).toEqual(fakeSearch));
  });
});

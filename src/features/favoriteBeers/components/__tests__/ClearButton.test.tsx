import { renderWithProviders } from "@/test/renderWithProviders";
import { setupStore } from "@/context/store";
import type { PreloadedState } from "@reduxjs/toolkit";
import type { RootState } from "@/context/store";
import { ClearButton } from "../ClearButton";

const setup = (preloadedState?: PreloadedState<RootState>) => {
  const store = setupStore();
  return renderWithProviders(<ClearButton />, {
    store,
    preloadedState,
  });
};

describe("ClearButton", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });
});

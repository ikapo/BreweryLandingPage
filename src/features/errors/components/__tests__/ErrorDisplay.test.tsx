import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/renderWithProviders";
import { ErrorDisplay } from "@/features/errors";

const errorMessage = "There is an error";
const setup = () =>
  renderWithProviders(
    <ErrorDisplay
      error={new Error(errorMessage)}
      resetErrorBoundary={() => null}
    />
  );

describe("Error", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it("should display the error message", () => {
    setup();
    expect(screen.getByText(errorMessage)).toBeTruthy();
  });
});

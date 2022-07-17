import { fireEvent, screen } from "@testing-library/react";
import { NavBar } from "@/layouts/NavBar";
import { Urls } from "@/types/urls";
import { history } from "@/utils/history";
import { renderWithProviders } from "@/test/renderWithProviders";

const setup = () => renderWithProviders(<NavBar />);

describe("NavBar", () => {
  beforeEach(() => {
    history.push("/");
    setup();
  });

  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it("should navigate to browse page when 'Browse Beers' is clicked", () => {
    const browseButton = screen.getByText("Browse");
    fireEvent.click(browseButton);
    expect(history.location.pathname).toBe(Urls.Browse);
  });

  it("should navigate to favorites page when 'View Favorites' is clicked", () => {
    const browseButton = screen.getByText("Favorites");
    fireEvent.click(browseButton);
    expect(history.location.pathname).toBe(Urls.Favorites);
  });
});

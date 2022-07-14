import { fireEvent, render, screen } from "@testing-library/react";
import { NavBar } from "@/components/NavBar";
import { history } from "@/history";
import { renderInRouter } from "@/utils/renderInRouter";
import { Urls } from "@/types/urls";

const setup = () => renderInRouter(<NavBar />);

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
    const browseButton = screen.getByText("Browse Beers");
    fireEvent.click(browseButton);
    console.log(history.location.pathname);
    expect(history.location.pathname).toBe(Urls.Browse);
  });

  it("should navigate to / when 'View Favorites' is clicked", () => {
    const browseButton = screen.getByText("View Favorites");
    fireEvent.click(browseButton);
    expect(history.location.pathname).toBe(Urls.Favorites);
  });
});

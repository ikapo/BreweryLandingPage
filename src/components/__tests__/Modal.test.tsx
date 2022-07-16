import { render, screen } from "@testing-library/react";
import { getRandomBeer } from "@/test/beerUtils";
import { Modal } from "@/components/Modal";

const beer = getRandomBeer();
const setup = () => render(<Modal beer={beer} />);

describe("BeerCard", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it("should display the beer modal properly", () => {
    setup();
    expect(screen.getByText(beer.name)).toBeTruthy();
    expect(
      screen.getByText(
        `${beer.method.fermentation.temp.value} degrees ${beer.method.fermentation.temp.unit}`
      )
    ).toBeTruthy();
    expect(screen.getByText(beer.food_pairing.join(", "))).toBeTruthy();
  });
});

import { render, screen } from "@testing-library/react";
import { getBeerAtIndex } from "@/test/beerUtils";
import { Modal } from "@/components/Modal";

const beer = getBeerAtIndex(Math.floor(Math.random() * 10));
const setup = () => render(<Modal beer={beer} />);

describe("Modal", () => {
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

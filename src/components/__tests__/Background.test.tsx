import { render } from "@testing-library/react";
import { Background } from "@/components/Background";

const setup = () => render(<Background />);

describe("Background", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });
});

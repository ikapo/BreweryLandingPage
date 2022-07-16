import { render } from "@testing-library/react";
import { Spinner } from "@/components/Spinner";

const setup = () => render(<Spinner />);

describe("Spinner", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });
});

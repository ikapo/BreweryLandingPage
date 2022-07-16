import { render } from "@testing-library/react";
import { Pagination } from "@/components/Pagination";

const emptyFunc = () => undefined;
describe("Pagination", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Pagination
        next={emptyFunc}
        previous={emptyFunc}
        showingStart={1}
        showingEnd={2}
        total={2}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});

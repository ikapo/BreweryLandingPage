import { Pagination } from "@/components/Pagination";
import { renderWithProviders } from "@/test/renderWithProviders";

const emptyFunc = () => undefined;
describe("Pagination", () => {
  it("should render successfully", () => {
    const { baseElement } = renderWithProviders(
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

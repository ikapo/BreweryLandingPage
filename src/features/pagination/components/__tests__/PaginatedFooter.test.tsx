import { renderWithProviders } from "@/test/renderWithProviders";
import { PaginatedFooter } from "@/features/pagination";

const emptyFunc = () => undefined;
describe("PaginatedFooter", () => {
  it("should render successfully", () => {
    const { baseElement } = renderWithProviders(
      <PaginatedFooter
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

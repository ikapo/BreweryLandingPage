import { useAppSelector } from "@/hooks/useAppSelector";

interface PaginatedFooterProps {
  showingStart: number;
  showingEnd: number;
  total: number;
  next: () => void;
  previous: () => void;
}

export function PaginatedFooter({
  next,
  previous,
  showingStart,
  showingEnd,
  total,
}: PaginatedFooterProps) {
  const searchStr = useAppSelector((s) => s.search.searchStr);
  return (
    <nav
      className="flex absolute bottom-0 justify-between items-center py-1 px-4 w-screen h-16 bg-gray-600 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        {searchStr ? (
          <p className="text-lg text-gray-200">Showing search results</p>
        ) : (
          <p className="text-lg text-gray-200">
            Showing <span className="font-medium">{showingStart}</span> to{" "}
            <span className="font-medium">{showingEnd}</span> of{" "}
            <span className="font-medium">{total}</span> results
          </p>
        )}
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        <button
          type="button"
          onClick={() => previous()}
          className="inline-flex relative items-center py-2 px-8 font-medium text-gray-700 bg-white rounded-md border border-gray-300 hover:bg-gray-50 text-md"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => next()}
          className="inline-flex relative items-center py-2 px-8 ml-3 font-medium text-gray-700 bg-white rounded-md border border-gray-300 hover:bg-gray-50 text-md"
        >
          Next
        </button>
      </div>
    </nav>
  );
}

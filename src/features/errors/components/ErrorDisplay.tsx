import { Background } from "@/components/Background";
import { resetPage } from "@/features/pagination";
import { clearSearch } from "@/features/search";
import { clearBeers as clearFavorites } from "@/features/favoriteBeers";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { NavBar } from "@/layouts/NavBar";
import { FallbackProps } from "react-error-boundary";

export function ErrorDisplay({ error, resetErrorBoundary }: FallbackProps) {
  const dispatch = useAppDispatch();
  const resetState = () => {
    dispatch(clearSearch());
    dispatch(clearFavorites());
    dispatch(resetPage());
    resetErrorBoundary();
  };
  return (
    <>
      <NavBar />
      <Background />
      <div className="flex flex-col justify-center h-[calc(100vh-10rem)]">
        <h2 className="text-8xl text-center text-red-400">
          An Error occurred:
        </h2>
        <h3 className="text-8xl text-center text-red-400">{error.message}</h3>
        <button
          type="button"
          onClick={() => resetState()}
          className="py-2 px-4 my-auto mx-auto w-64 h-16 text-2xl font-medium text-center text-white bg-red-500 rounded-xl border border-transparent shadow-sm hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
        >
          <span>Try Again?</span>
        </button>
      </div>
    </>
  );
}

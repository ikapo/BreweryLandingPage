/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-redundant-roles */
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { update } from "@/features/search";
import { resetPage } from "@/features/pagination";

const searchData = z.object({
  search: z.string(),
});
type FormValues = { search: string };

export function SearchBar() {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(searchData),
  });
  const onSubmit = (formData: FormValues) => {
    dispatch(resetPage());
    dispatch(update(formData.search));
  };
  return (
    <div className="flex flex-1 justify-center items-center px-2 lg:justify-end lg:ml-6">
      <form
        role="form"
        className="flex flex-row w-full max-w-lg lg:max-w-xs"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <input
            id="search"
            className="block py-2 pr-3 pl-3 w-5/6 leading-5 placeholder-gray-500 bg-white rounded-md border border-gray-300 sm:text-sm focus:placeholder-gray-400 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
            placeholder="Search by food"
            type="search"
            {...register("search")}
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 my-auto text-sm font-medium text-center text-white bg-gray-500 rounded-md border border-transparent shadow-sm hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
        >
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}

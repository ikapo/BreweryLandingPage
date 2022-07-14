import { Urls } from "@/types/urls";
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="px-12 mx-auto bg-gray-800">
      <div className="flex relative justify-between h-16">
        <h1 className="flex-shrink-0 self-center mx-4 text-lg font-bold text-gray-50">
          Birot Ltd.
        </h1>
        <div className="flex relative inset-0 justify-center items-center mx-28 sm:absolute">
          <NavLink
            className="py-2 px-3 mx-4 text-sm font-medium text-gray-300 rounded-lg hover:text-white hover:bg-gray-700"
            to={Urls.Browse}
          >
            Browse Beers
          </NavLink>
          <NavLink
            className="py-2 px-3 mx-4 text-sm font-medium text-gray-300 rounded-lg hover:text-white hover:bg-gray-700"
            to={Urls.Favorites}
          >
            View Favorites
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

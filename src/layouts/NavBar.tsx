/* eslint-disable react/require-default-props */
import { clear } from "@/features/search";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { Urls } from "@/types/urls";
import React from "react";
import { NavLink } from "react-router-dom";

interface NavBarProps {
  children?: React.ReactNode;
}

export function NavBar({ children }: NavBarProps) {
  const dispatch = useAppDispatch();
  return (
    <nav className="px-12 mx-auto bg-gray-800">
      <div className="flex relative justify-between h-16">
        <h1 className="flex-shrink-0 self-center mx-4 text-lg font-bold text-gray-50">
          Birot Ltd.
        </h1>
        <div className="flex relative inset-0 justify-center items-center mx-28 sm:absolute">
          <NavLink
            className="py-2 px-3 mx-4 text-sm font-medium text-gray-300 rounded-lg hover:text-white hover:bg-gray-700"
            onClick={() => dispatch(clear())}
            to={Urls.Browse}
          >
            Browse Beers
          </NavLink>
          <NavLink
            onClick={() => dispatch(clear())}
            className="py-2 px-3 mx-4 text-sm font-medium text-gray-300 rounded-lg hover:text-white hover:bg-gray-700"
            to={Urls.Favorites}
          >
            View Favorites
          </NavLink>
        </div>
        {children}
      </div>
    </nav>
  );
}

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
    <nav className="bg-gray-800">
      <div className="flex relative justify-between items-center px-2 mx-auto max-w-7xl h-16 sm:px-4 lg:px-8">
        <div className="flex items-center px-2 lg:px-0">
          <h1 className="font-bold text-gray-200">Birot Ltd.</h1>
          <div className="block ml-6">
            <div className="flex space-x-4">
              <NavLink
                className="py-2 px-2 mx-1 text-sm font-medium text-gray-300 rounded-lg hover:text-white hover:bg-gray-700"
                onClick={() => dispatch(clear())}
                to={Urls.Browse}
              >
                Browse
              </NavLink>
              <NavLink
                onClick={() => dispatch(clear())}
                className="py-2 px-2 mx-1 text-sm font-medium text-gray-300 rounded-lg hover:text-white hover:bg-gray-700"
                to={Urls.Favorites}
              >
                Favorites
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex justify-end px-2 lg:ml-6">
          <div className="w-full max-w-lg lg:max-w-xs">{children}</div>
        </div>
      </div>
    </nav>
  );
}

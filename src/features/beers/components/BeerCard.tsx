/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IBeer } from "@/features/beers";
import { add } from "@/features/favoriteBeers";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useState } from "react";
import ReactModal from "react-modal";
import { Modal } from "./Modal";

interface BeerCardProps {
  beer: IBeer;
}

export function BeerCard({ beer }: BeerCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ReactModal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        className="absolute left-1/2 top-1/4 w-1/2 -translate-x-1/2 md:w-1/3"
        shouldCloseOnOverlayClick
      >
        <Modal beer={beer} />
      </ReactModal>
      <div
        key={beer.id}
        className="flex flex-col justify-items-center max-w-xs bg-blue-50 rounded-lg border-4 border-blue-400 shadow-lg aspect-square"
      >
        <button
          type="button"
          className="flex flex-col"
          onClick={() => setShowModal(true)}
        >
          <img
            src={beer.image_url}
            alt={beer.name}
            className="pt-4 mx-auto h-60"
          />
          <span className="mt-1 w-full bg-gray-500 p-[1px]" />
          <div className="p-6">
            <h2 className="text-lg font-medium leading-6 text-gray-900">
              {beer.name}
            </h2>
          </div>
        </button>
        <button
          type="button"
          className="self-center py-2 px-3 my-4 text-sm text-white bg-blue-600 rounded border border-transparent shadow-sm hover:bg-blue-700"
        >
          Add To Favorites +
        </button>
      </div>
    </>
  );
}

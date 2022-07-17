/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IBeer } from "@/features/beers";
import { insert, remove } from "@/features/favoriteBeers";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useState } from "react";
import ReactModal from "react-modal";
import { Modal } from "@/components/Modal";

interface BeerCardProps {
  beer: IBeer;
  Rank?: React.ReactNode;
}

export function BeerCard({ beer, Rank = null }: BeerCardProps) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const selector = useAppSelector((s) => s.favoriteBeers.favoriteBeers);
  ReactModal.setAppElement("body");
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
        className="flex flex-col w-72 h-64 rounded-lg border border-gray-300 shadow-md transition-shadow hover:shadow-2xl overflow-clipped hover:shadow-gray-800"
      >
        <button
          type="button"
          className="flex flex-col"
          onClick={() => setShowModal(true)}
        >
          <img
            src={beer.image_url}
            alt={beer.name}
            className="pt-4 mx-auto h-52"
          />
          <span className="mt-1 w-full bg-gray-500 p-[1px]" />
          <p className="p-3 w-full text-lg font-medium leading-6 text-center text-gray-300 truncate">
            {beer.name}
          </p>
        </button>
        {selector.findIndex((b) => b.id === beer.id) !== -1 ? (
          <button
            onClick={() => dispatch(remove(beer))}
            type="button"
            className="self-center py-2 px-3 mb-4 text-sm bg-gray-200 rounded border border-transparent shadow-sm hover:bg-gray-400 text-grey-800"
          >
            Remove From Favorites
          </button>
        ) : (
          <button
            onClick={() => dispatch(insert(beer))}
            type="button"
            className="self-center py-2 px-3 mb-4 text-sm bg-gray-200 rounded border border-transparent shadow-sm hover:bg-gray-400 text-grey-800"
          >
            Add To Favorites +
          </button>
        )}
        {Rank}
      </div>
    </>
  );
}

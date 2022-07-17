import { useAppDispatch } from "@/hooks/useAppDispatch";
import { clear } from "@/features/favoriteBeers";
import ReactModal from "react-modal";
import { useState } from "react";

export function ClearButton() {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ReactModal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        className="absolute left-1/2 top-1/4 w-1/2 -translate-x-1/2 md:w-1/3"
        shouldCloseOnOverlayClick
      >
        <div className="flex flex-col bg-blue-50 rounded-lg border-4 border-gray-400 shadow-xl outline-none focus:outline-none">
          <div className="flex justify-between items-start p-5 rounded-t border-b border-solid border-slate-200">
            <h3 className="mx-auto text-3xl font-semibold">
              Clear all favorites?
            </h3>
          </div>
          <div className="flex relative flex-row justify-around py-2 px-6 text-slate-700">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="py-2 px-4 my-auto text-sm font-medium text-center text-white bg-red-500 rounded-md border border-transparent shadow-sm hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
            >
              <span>Cancel</span>
            </button>
            <button
              type="button"
              onClick={() => dispatch(clear()) && setShowModal(false)}
              className="py-2 px-4 my-auto text-sm font-medium text-center text-white bg-green-500 rounded-md border border-transparent shadow-sm hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
            >
              <span>Confirm</span>
            </button>
          </div>
        </div>
      </ReactModal>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="py-2 px-4 my-auto text-sm font-medium text-center text-white bg-gray-500 rounded-md border border-transparent shadow-sm hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
      >
        <span>Remove All</span>
      </button>
    </>
  );
}

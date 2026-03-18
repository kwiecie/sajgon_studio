import React from "react";
import { useSearchParams } from "react-router-dom";
import { Modal } from "./components/modal";

export default function PortfolioItem() {
  const [params, setParams] = useSearchParams();
  const isModalOpen = params.get("modal") === "true";

  return (
    <div className="flex justify-center items-center w-full flex-col">
      <button
        className="text-gray-100 border-2 border-gray-700 bg-gray-600 rounded shadow-xl p-2 outline-none focus:border-blue-300"
        onClick={() => setParams({ ...params, modal: "true" })}
      >
        Open the modal
      </button>
    </div>
  );
}

import React from "react";
import { useSearchParams } from "react-router-dom";
import { Modal } from "./modal";

const LoremModal: React.FC = () => {
  const [params, setParams] = useSearchParams();

  return (
    <modal.Frame
      open={!!params.get("modal")}
      onClose={() => {
        params.delete("modal");
        setParams(params);
      }}
    >
      <Modal.Head> </Modal.Head>

      <Modal.Body>
        <div className="flex flex-col space-y-2">
          <input
            className="text-gray-800 outline-none border-2 border-white focus:border-blue-300 p-1"
            placeholder="Username"
          />

          <input
            className="text-gray-800 outline-none border-2 border-white focus:border-blue-300 p-1"
            placeholder="Password"
            type="password"
          />

          <button className="text-gray-100 border-2 border-blue-700 bg-blue-600 rounded shadow-xl p-2 outline-none focus:border-blue-300">
            Sign in
          </button>
        </div>
      </Modal.Body>
    </Modal.Frame>
  );
};

export const Home: React.FC = () => {
  const [params, setParams] = useSearchParams();

  return (
    <div className="flex justify-center items-center w-full flex-col">

      <button
        className="text-gray-100 border-2 border-gray-700 bg-gray-600 rounded shadow-xl p-2 outline-none focus:border-blue-300"
        onClick={() => setParams({ ...params, modal: "true" })}
      >
        Open the modal
      </button>

      <LoremModal />

    </div>
  );
};
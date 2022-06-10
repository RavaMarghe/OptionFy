import React from "react";
import TabsRender2 from "./ModalContent2";

export default function Modal2() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div
        className="text-white cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        Login
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gradient-to-t from-violet-900 to-gray-900 text-white outline-none focus:outline-none">
                <TabsRender2 />
                <button
                  className="inline-flex items-center justify-center h-10 px-6 font-medium text-white mx-3 mb-5 bottone"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

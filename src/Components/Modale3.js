import React from "react";
import TabsRender3 from "./ModalContent3";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <div
        className="text-white cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <button className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none bottone"
>
  Subscribe Now</button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gradient-to-t from-violet-900 to-gray-900 text-white outline-none focus:outline-none">
                <TabsRender3 />
                <button
                  className="inline-flex items-center justify-center h-10 px-6 font-medium text-white mx-3 mb-5 bottone"
                  type="button"
                  onClick={() => setShowModal(false)}>
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

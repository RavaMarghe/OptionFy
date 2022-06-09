import React from "react";
import FormContact from "./FormContact";

export default function ContactUs() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bottone border border-white text-white p-1 px-4 rounded-full fixed bottom-10 right-5"
        onClick={() => setShowModal(true)}
      >
        Contact Us
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gradient-to-t from-violet-900 to-gray-900 text-white outline-none focus:outline-none">
                {/*header*/}
                <FormContact />
                <button
                  className="inline-flex items-center justify-center h-12 px-6 font-medium text-white mx-3 mb-5 bottone"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                {/*body*/}
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

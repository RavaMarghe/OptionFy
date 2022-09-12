import React, { useRef } from "react";
const FormContact = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const mail = e.target.elements.mail.value;
    const phone = e.target.elements.pNum.value;
    const passWord = e.target.elements.password.value;
    const textarea = e.target.elements.txtname.value;
    console.log({ firstName, lastName, mail, passWord, phone, textarea });
    formRef.current.reset();
  };
  return (
    <form className="w-96" ref={formRef} onSubmit={handleSubmit}>
      <h1 className="text-xl text-center my-6 ">How can we help?</h1>
      <div className="mb-1 px-4 sm:mb-2">
        <input
          placeholder="Firstname"
          required
          type="text"
          className="bg-gray-900 flex-grow w-full h-12 px-4 mb-2 transition duration-200 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="firstName"
          name="firstName"
        />
      </div>
      <div className="mb-1 px-4 sm:mb-2">
        <input
          placeholder="Lastname"
          required
          type="text"
          className="bg-gray-900 flex-grow w-full h-12 px-4 mb-2 transition duration-200 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="lastName"
          name="lastName"
        />
      </div>
      <div className="mb-1 px-4 sm:mb-2">
        <input
          placeholder="Email"
          required
          type="mail"
          className="bg-gray-900 flex-grow w-full h-12 px-4 mb-2 transition duration-200 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="mail"
          name="mail"
        />
      </div>
      <div className="mb-1 px-4 sm:mb-2">
        <input
          placeholder="Password"
          required
          type="password"
          className="bg-gray-900 flex-grow w-full h-12 px-4 mb-2 transition duration-200 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="password"
          name="password"
        />
      </div>
      <div className="mb-1 px-3 sm:mb-2">
        <input
          placeholder="Phone"
          required
          type="tel"
          className="bg-gray-900 flex-grow w-full h-12 px-4 mb-2 transition duration-200 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="pNum"
          name="pNum"
        />
      </div>
      <div className="mb-1 px-3 sm:mb-2">
        <textarea
          id="txtid"
          name="txtname"
          rows="4"
          cols="47"
          maxLength="180"
          className="bg-gray-900 flex-grow w-full h-18 px-4 mb-2 transition duration-200 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          placeholder="How can we help"
        ></textarea>
      </div>
      <div className="mt-4 px-3 mb-2 sm:mb-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium text-white bottone"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default FormContact;

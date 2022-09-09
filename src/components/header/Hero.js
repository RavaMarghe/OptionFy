import { useState } from "react";
import Img from "../../assets/landing.png";

const HeroOne = () => {
  //Newsletter registration
  const [newsLetter, setNewsLetter] = useState("");
  function handleEmail(event) {
    setNewsLetter(event.target.value);
  }

  function newsLetterRegistration() {
    alert(`Thanks for subscribing to the newsletter`);
    console.log(`Address "${newsLetter}" added to mailing list`);
  }

  return (
    <div className="bg-gradient-to-b from-violet-900 to-black">
      <div className="relative flex flex-col px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <img
            src={Img}
            className="object-cover object-right w-full h-auto lg:w-auto lg:h-full immagine"
            alt=""
          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6 sm:pt-20 lg:pt-5">
              <h2 className="z-0 max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl text-center md:text-left">
                THE ONLY DONE FOR
                <br className="hidden md:block" />
                YOU OPTION PICKER{" "}
                <span className="inline-block text-deep-purple-accent-400"></span>
              </h2>
              <p className="text-base text-gray-100 md:text-lg text-center md:text-left mb-1">
                Get trade alerts. Cancel anytime.
              </p>
              <p className="text-center md:text-left text-gray-500">
                <strong>
                  Enter your email to create or restart your membership
                </strong>
              </p>
            </div>
            <form>
              <div>
                <input
                  placeholder="Email"
                  required
                  type="email"
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 border border-gray-400 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline bg-gray-900 text-white"
                  value={newsLetter}
                  onChange={handleEmail}
                />
              </div>
              <div className="flex items-center mt-4">
                <button
                  type="button"
                  className="inline-flex items-center justify-center h-12 px-20 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bottone"
                  onClick={newsLetterRegistration}
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;

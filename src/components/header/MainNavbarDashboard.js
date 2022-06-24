import { useState } from "react";
import { useNavigate } from "react-router";
import Img from "../../assets/LogoWhite.png";
import Modal from "../modali/Modale";
import Modal2 from "../modali/Modale2";

export const MainNavbarDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const easterEgg = localStorage.getItem('users')
  const navigateToEaster = useNavigate()
  function goEaster(){
    navigateToEaster('/dashboard/easteregg')
  }

  return (
    <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center grid-cols-2 lg:grid-cols-3 justify-center relative">
        <ul className="flex items-center hidden space-x-8 lg:flex">
        <li className={easterEgg === 'jacopo@jacopoeasteregg' ? "text-red-600" : "text-red-600 hidden"}>
          <button onClick={goEaster}>Easter Egg</button>
          </li>
        <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Feature
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Pricing
            </a>
          </li>
          <li>
            <Modal2 />
          </li>
          <li>
            <Modal />
          </li>
        </ul>
        <img
          src={Img}
          alt="logo"
          className="w-28 absolute bottom-0 right-0 hidden lg:block"
        />
        <img
          src={Img}
          alt="logo"
          className="w-28 absolute bottom-0 left-0 sm:block lg:hidden"
        />

        <div className="ml-auto lg:hidden z-10">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-3 left-1/2 w-full">
              <div className="p-5 bg-white border rounded shadow-sm bg-gradient-to-t from-violet-900 to-gray-900 text-white w-2/4">
                <div className="flex items-center justify-between mb-4 border-b-2 border-white">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <img src={Img} alt="logo" className="w-28"></img>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide transition-colors duration-200 border-b-2 border-white"
                      >
                        Feature
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide transition-colors duration-200 border-b-2 border-white"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide transition-colors duration-200 border-b-2 border-white"
                      >
                        Login
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Sign in"
                        title="Sign in"
                        className="font-medium tracking-wide transition-colors duration-200 border-b-2 border-white"
                      >
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

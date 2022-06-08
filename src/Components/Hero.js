import Img from './assets/landing.png';

const HeroOne = () => {
    return (
      <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <img
            src={Img}
            className="object-cover object-right w-full h-auto lg:w-auto lg:h-full immagine"
            alt=""
          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
              </div>

              <h2 className="z-0 max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              THE ONLY DONE FOR
              <br className="hidden md:block" />
                YOU OPTION PICKER{' '}
                <span className="inline-block text-deep-purple-accent-400">
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
Get trade alerts. Cancel anytime.
              </p>

              <p><strong>Enter your email to create or restart your membership</strong></p>
            </div>
            <form>
              <div className="flex flex-col md:flex-row">
                <input
                  placeholder="Email"
                  required=""
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bottone"
                >
                  Get Started
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  export default HeroOne
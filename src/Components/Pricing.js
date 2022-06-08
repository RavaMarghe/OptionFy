const Pricing = () => {
  return (
    <div class="relative w-full h-full">
      <div class="absolute hidden w-full lg:block h-96" />
      <div class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"></div>
        <div class="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">
          <div>
            <div class="p-8 bg-gray-900 rounded">
              <div class="mb-4 text-center">
                <p class="text-xl font-medium tracking-wide text-white">
                  Monthly Pro
                </p>
                <div class="flex items-center justify-center">
                  <p class="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                    $67
                  </p>
                  <p class="text-lg text-gray-500">/ month</p>
                </div>
              </div>
              <ul class="mb-8 space-y-2">
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="green"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    <strong>Daily options recommendations</strong>
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="green"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Suggested strike prices for each symbol
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="green"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    8 recommended options strategies
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="green"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Grading system for better options trading
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="green"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Proprietary indicators
                  </p>
                </li>
              </ul>
              <button
                type="submit"
                class="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none bottone"
              >
                Get Now
              </button>
            </div>
            <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
            <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
            <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
          </div>
          <div>
            <div class="p-8 bg-gray-900 rounded">
              <div class="mb-4 text-center">
                <p class="text-xl font-medium tracking-wide text-white">
                  Annual Pro
                </p>
                <div class="flex items-center justify-center">
                  <p class="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                    $670
                  </p>
                  <p class="text-lg text-gray-500">/ year</p>
                </div>
                {/* aggiungere risparmio */}
              </div>
              <ul class="mb-8 space-y-2">
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="green"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    <strong>Daily</strong> options recommendations
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="green"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Suggested strike prices for each symbol
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="green"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    8 recommended options strategies
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="green"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Grading system for better options trading
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="green"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Proprietary indicators
                  </p>
                </li>
              </ul>
              <button
                type="submit"
                class="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none bottone"
              >
                Get Now
              </button>
            </div>
            <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
            <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
            <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

const FormLogin = () => {
  return (
    <form>
      <div className="flex justify-center w-full mb-3">
        <a
          href="/"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          <div className="flex items-center">
            <div className="mr-3 font-semibold text-white">
              Login with Google
            </div>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </div>
        </a>
      </div>
      <p>Or</p>
      <div className="mb-1 sm:mb-2">
        <label htmlFor="firstName" className="inline-block mb-1 font-medium">
          Email
        </label>
        <input
          placeholder="John"
          required
          type="text"
          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="firstName"
          name="firstName"
        />
      </div>
      <div className="mb-1 sm:mb-2">
        <label htmlFor="lastName" className="inline-block mb-1 font-medium">
          Password
        </label>
        <input
          placeholder="Doe"
          required
          type="text"
          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="lastName"
          name="lastName"
        />
      </div>
      <div className="mt-4 mb-2 sm:mb-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default FormLogin;

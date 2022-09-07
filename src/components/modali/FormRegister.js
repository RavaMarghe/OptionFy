import React, { useState } from "react";

function FormRegister() {
  // START - ADD DATA TO SESSION STORAGE USING CLASS COMPONENT
  // const state = useState();
  // const [users, setState] = useState();

  // const conditionalSetItem = () => {
  //     localStorage.setItem("users", users);
  //   };

  /*     if (
      localStorage.getItem("users") &&
      localStorage.getItem("users").includes(mail)
    ) {
      alert("Email already exists");
    } else {
      this.setState({ users: [...this.state.users, mail + passWord] }, () => {
        this.consitionalSetItem();
      });
    } */

  //END - ADD DATA TO SESSION STORAGE USING CLASS COMPONENT

  const [firstName, setFirstName] = useState(""); //FORM
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [userAllData, setUserAllData] = useState({}); //Tutti i dati

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePhoneNumberChange(event) {
    setPhoneNumber(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  async function fetcherFunction(data) {
    const response = await fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  }

  function fetcherFunction2() {
    let myObj = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      confirmPassword,
    };
    setUserAllData({ ...userAllData, ...myObj });

    fetcherFunction(userAllData);
  }

  return (
    <form>
      <div className="flex justify-center w-full">
        <a
          href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=934601340853-ckneo3hfuhfq56baa4tmei1j7h0hjtrn.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fprod-optionsfy.auth.us-east-2.amazoncognito.com%2Foauth2%2Fidpresponse&scope=profile%20email%20openid&response_type=code&state=H4sIAAAAAAAAAG1S2ZLaMBD8Fz-Hw5A1x9tyLqzX3AmQSrmEPdiyJY0tyXhJKv8eGcImD3nT9HTXzHTrp1UokEtENgutvilqQJSutfzYCd35tRil1icrk3ihIUiPcDCkKWLEwOABoyD0Tdi2m21HkKQrCqpoq-Ai5THrBWdueBJCKiHQu_XMUGOtM9VvNDDTFIU6X-sB8obCgBL2XOh4DSozONyE9-f2mlWDNaYg_tnnD_yxjwowA2X1v1nACWUGMbWgYSWJUcBdeqaG_N2wNdFGLgrGzCkYwjAmjIGI_g--gY4xfLQEiqCaTUfN5WnqdZPBSnt5e7lY7Xejcqjzsu0meM4G6cv-EPeaftYSo9V27OaTAZ1e_GR79C_Jgo5Pojkaa3uaz3uTE9tLNptPxt4MgEYd8FqvrHsoa8GcF_xdHf3u13xzdCe9g2j7IvZeO340zg9Pdv6W7LbOyp_HNunlJerFusQaP7WuX4brlJaFGxwqg0BeQL6g0kuU2qxv7Ahrf4Mgxv76xx-oE05-mDsxElRjlVKVuQRS0beUwwYCFKEx3HaePne6dtNxqhlKmf7DqOp7PWst6anQVTZ39Ob9BKVLRUpFtHlozoQp-PUbADRL2JUCAAA.H4sIAAAAAAAAAOM-47JFfFWmlXPJpDZvxX5TjisMRvE1Qh93yIkqxB29ewcAwCwIFCAAAAA.3&flowName=GeneralOAuthFlow"
          className="inline-flex items-center justify-center h-10 w-72 font-medium text-white bottone"
        >
          <div className="flex items-center">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="google"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z"></path>
            </svg>
            <div className="mr-3 font-semibold text-white">
              &nbsp;&nbsp;Sign up with Google
            </div>
          </div>
        </a>
      </div>
      <p className="text-center pt-0 pb-3 ">
        <span className="line-through">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </span>{" "}
        Or{" "}
        <span className="line-through">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </span>
      </p>
      <div className="mb-1 sm:mb-2">
        <input
          placeholder="First name"
          required
          type="text"
          className="flex-grow w-full h-10 px-4 mb-2 transition duration-200 bg-gray-900 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="firstName"
          name="firstName"
          onChange={handleFirstNameChange}
        />
      </div>
      <div className="mb-1 sm:mb-2">
        <input
          placeholder="Last Name"
          required
          type="text"
          className="flex-grow w-full h-10 px-4 mb-2 transition duration-200 bg-gray-900 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="lastName"
          name="lastName"
          onChange={handleLastNameChange}
        />
      </div>
      <div className="mb-1 sm:mb-2">
        <input
          placeholder="Email"
          required
          type="email"
          className="flex-grow w-full h-10 px-4 mb-2 transition duration-200 bg-gray-900 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="mail"
          name="mail"
          onChange={handleEmailChange}
        />
      </div>
      <div className="mb-1 sm:mb-2">
        <input
          placeholder="Phone Number(Optional)"
          required
          type="tel"
          className="flex-grow w-full h-10 px-4 mb-2 transition duration-200 bg-gray-900 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="tel"
          name="tel"
          onChange={handlePhoneNumberChange}
        />
      </div>
      <div className="mb-1 sm:mb-2">
        <input
          placeholder="Password"
          required
          type="password"
          className="flex-grow w-full h-10 px-4 mb-2 transition duration-200 bg-gray-900 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="passWord"
          name="passWord"
          onChange={handlePasswordChange}
        />
      </div>
      <div className="mb-1 sm:mb-2">
        <input
          placeholder="Confirm Password"
          required
          type="password"
          className="flex-grow w-full h-10 px-4 mb-2 transition duration-200 bg-gray-900 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="confirmPassWord"
          name="confirmPassWord"
          onChange={handleConfPasswordChange}
        />
      </div>
      <div className="mb-1 sm:mb-2">
        <label>I agree to the Terms of Service </label>
        <input required type="checkbox" id="checkBox" name="checkBox" />
      </div>
      <div className="mt-4 mb-2 sm:mb-4">
        <button
          type="button"
          className="inline-flex items-center justify-center h-10 w-full font-medium text-white bottone"
          onClick={fetcherFunction2}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default FormRegister;

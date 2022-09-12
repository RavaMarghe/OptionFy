import React from "react";
import Img from "../../assets/LogoWhite.png";

export function Footer() {
  return (
    <div className="relative mt-16 border-t-2">
      <div className="px-4 pt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="md:max-w-md lg:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={Img} alt="pic" className="w-28" />
          </a>
        </div>
        <div className="flex justify-end text-gray-100 pt-5">
          <a href="/" className="p-2">
            TERMS OF SERVICE
          </a>
          <a href="/" className="p-2">
            PRIVACY POLICY
          </a>
          <a href="/disclaimer" className="p-2">
            DISCLAIMER
          </a>
        </div>

        <div className="pt-5 pb-5 border-t border-deep-purple-accent-200 text-gray-100 text-xs">
          <p className="mb-2 ">
            Disclaimer: Please be aware that trading stocks, futures, stock
            options, and futures options involves a substantial risk of loss and
            is not suitable for all investors. Past performance is not
            necessarily indicative of future results.
          </p>
          <p>
            INFORMATION IS FOR GENERAL EDUCATIONAL AND RESEARCH PURPOSES AND
            SHOULD NOT BE CONSTRUED AS INDIVIDUAL INVESTMENT ADVICE. More info
            <a href="/" className="hover:text-orange-300 ">
              {" "}
              here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

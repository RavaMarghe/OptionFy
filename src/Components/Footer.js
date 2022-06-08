import React from "react";
import Img from "./assets/logo.png";

export class Footer extends React.Component {
  render() {
    return (
      <div className="relative mt-16">
        <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img src={Img} className="w-28 py-3"/>
            </a>
          </div>
          <div className="flex justify-end">
            <a className="p-2">TERMS OF SERVICE</a>
            <a className="p-2">PRIVACY POLICY</a>
            <a className="p-2">DISCLAIMER</a>
          </div>

          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
            <p className="text-sm">
              Disclaimer: Please be aware that trading stocks, futures, stock
              options, and futures options involves a substantial risk of loss
              and is not suitable for all investors. Past performance is not
              necessarily indicative of future results. INFORMATION IS FOR
              GENERAL EDUCATIONAL AND RESEARCH PURPOSES AND SHOULD NOT BE
              CONSTRUED AS INDIVIDUAL INVESTMENT ADVICE. More info here
            </p>
          </div>
        </div>
      </div>
    );
  }
}

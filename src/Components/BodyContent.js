import React from "react";
import pic1 from "./assets/01.svg"
/* import pic2 from "./assets/02.svg"
import pic3 from "./assets/03.svg"
import pic4 from "./assets/04.svg" */

export class BodyContent extends React.Component {
  render() {
    const mYLine = [
      {
        title: "Why Us",
        text: "Ex-traders building the best option AI algorithm, which makes large profits in minutes a day. We are ex-quants with combined 37 years of experience. Optionsfy software picks the ticker, strikes and expiration dates for you so you can profit without the long guesswork. It's powered by an algorithm fed with 10 years of data and 10 factors proven to work. Optionsfy saves you time and makes you more profitable with high return, consistent trades in minutes in ALL MARKET ENVIRONMENTS.",
        pic: pic1
      },
      {
        title: "Competitive Advantage of Artificial Intelligence",
        text: "Harness the power of industry leading A.I. backed algorithms. Similar algorithms the top hedge funds use are now at your fingertips. Our HotScore technology aggregates data from multiple sources to quickly and clearly show you the best options to trade all DONE FOR YOU.",
        //pic: {pic2}
      },
      {
        title: "Speed & time are at our core",
        text: "Speed means everything in trading. With perfectly timed notifications to place winning trades ahead of your competition, never miss another opportunity with all the best option trades delivered daily to your inbox at market open.",
        // pic: {pic3}
      },
      {
        title: "Built in options chain scanning",
        text: "Overwhelmed by varying strike prices and which options to buy? We scan the entire options chain so you don’t have to, researching each possible trade ahead of time and recommend you the best plays",
        // pic: {pic4}
      },
      {
        title: "Powerful for beginners & seasoned professionals alike",
        text: "Whether you are just starting your journey with options or work on the street yourself, our tools are easy enough to use starting on day 1 and give you the competitive knowledge learned from years of trial & error.",
        // pic: {pic1}
      },
    ];

    return (
      <div>
        {mYLine.map((line) => (
          <div className="text-gray-100 flex">
            <div>{line.pic}</div>
            <div>
              <h1 className="p-5 pb-5 mx-20">{line.title}</h1>
              <p className="p-5 mx-20">{line.text}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
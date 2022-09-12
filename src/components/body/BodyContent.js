import React from "react";
import pic1 from "../../assets/body1.webp";
import pic2 from "../../assets/body2.webp";
import pic3 from "../../assets/body3.webp";
import pic4 from "../../assets/body6.webp";
import pic5 from "../../assets/body5.jpg";

export function BodyContent() {
  const myBody = [
    {
      id: 1,
      title: "Why Us",
      text: "Ex-traders building the best option AI algorithm, which makes large profits in minutes a day. We are ex-quants with combined 37 years of experience. Optionsfy software picks the ticker, strikes and expiration dates for you so you can profit without the long guesswork. It's powered by an algorithm fed with 10 years of data and 10 factors proven to work. Optionsfy saves you time and makes you more profitable with high return, consistent trades in minutes in ALL MARKET ENVIRONMENTS.",
      pic: pic1,
    },
    {
      id: 2,
      title: "Competitive Advantage of Artificial Intelligence",
      text: "Harness the power of industry leading A.I. backed algorithms. Similar algorithms the top hedge funds use are now at your fingertips. Our HotScore technology aggregates data from multiple sources to quickly and clearly show you the best options to trade all DONE FOR YOU.",
      pic: pic2,
    },
    {
      id: 3,
      title: "Speed & time are at our core",
      text: "Speed means everything in trading. With perfectly timed notifications to place winning trades ahead of your competition, never miss another opportunity with all the best option trades delivered daily to your inbox at market open.",
      pic: pic3,
    },
    {
      id: 4,
      title: "Built in options chain scanning",
      text: "Overwhelmed by varying strike prices and which options to buy? We scan the entire options chain so you don’t have to, researching each possible trade ahead of time and recommend you the best plays.",
      pic: pic4,
    },
    {
      id: 5,
      title: "Powerful for beginners & seasoned professionals alike",
      text: "Whether you are just starting your journey with options or work on the street yourself, our tools are easy enough to use starting on day 1 and give you the competitive knowledge learned from years of trial & error.",
      pic: pic5,
    },
  ];

  return (
    <div>
      {myBody.map((row) => (
        <div
          key={row.id}
          className={
            row.id % 2
              ? "text-gray-100 flex justify-center overflow-hidden my-10 md:my-20 lg:my-24 mx-2 mb-2 p-5 lg:md:p-10 lg:pb-8 md:mx-10 lg:mx-20 border-x-4 border-y lg:rounded-tl-full lg:rounded-br-full rounded-tl-3xl rounded-brs-3xl border-violet-900 bg-black lg:h-75"
              : "text-gray-100 flex flex-row-reverse justify-center items-centre overflow-hidden my-10 md:my-20 lg:my-24 mx-2 mb-2 p-5 lg:p-10 lg:pb-8 md:mx-10 lg:mx-20 border-x-4 border-y lg:rounded-tl-full lg:rounded-br-full rounded-tl-3xl rounded-br-3xl border-violet-900 bg-black lg:h-75"
          }
        >
          <div
            className={
              row.id % 2
                ? "flex justify-center items-center md:ml-2 lg:ml-16 lg:w-4/12"
                : "flex justify-center items-center mr-2 lg:mr-16 lg:w-4/12"
            }
          >
            <img
              src={row.pic}
              alt="line pic"
              className="hidden lg:block w-4/5 rounded-md h-5/6"
            ></img>
          </div>
          <div
            className={
              row.id % 2
                ? "flex flex-col justify-center lg:w-8/12 pr-18 lg:pr-20"
                : "flex flex-col justify-center lg:w-8/12 pl-18 lg:pl-20"
            }
          >
            <h1
              className={
                row.id % 2
                  ? "px-2 md:px-5 md:ml-5 text-2xl font-bold text-violet-800 uppercase text-center lg:text-left"
                  : "md:px-5 md:ml-8 text-2xl font-bold text-violet-800 uppercase text-center lg:text-left"
              }
            >
              {row.title}
            </h1>
            <p
              className={
                row.id % 2
                  ? "p-5 lg:mr-8 lg:ml-5 text-justify"
                  : "p-5 lg:ml-8 lg:mr-5 text-justify"
              }
            >
              {row.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

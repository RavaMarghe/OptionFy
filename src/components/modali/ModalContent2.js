import React from "react";
import FormLogin2 from "./FormLogin2";
import FormRegister from "./FormRegister";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-96 bg-gradient-to-t from-violet-900 to-gray-900 text-white">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center m-2">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-" + color + "-600 bg-purple-900"
                    : "text-white bg-" + color + "-600")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Login
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center m-2">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-" + color + "-600 bg-purple-900"
                    : "text-white bg-" + color + "-600")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Sign Up
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-96 mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <FormLogin2 />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <FormRegister />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender2() {
  return (
    <>
      <Tabs color="pink" />
    </>
  );
}

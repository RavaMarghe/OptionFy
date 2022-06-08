import React from "react";
import { MainNavbar } from "./MainNavbar";

export class Header extends React.Component {
  render() {
    return (
      <div className="border-b-2 border-black bg-gradient-to-r from-violet-500 to-gray-800">
        <MainNavbar  />
      </div>
    );
  }
}

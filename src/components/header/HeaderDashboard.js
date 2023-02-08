import React from "react";
import { MainNavbarDashboard } from "./MainNavbarDashboard";

export class HeaderDashboard extends React.Component {
  render() {
    return (
      <div className="border-b-2 border-black gradient-nav">
        <MainNavbarDashboard />
      </div>
    );
  }
}

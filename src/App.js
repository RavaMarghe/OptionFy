import React from "react";

import "./index.css";
import { Route, Routes } from "react-router";
import { Home } from "./components/pages/Home";
import { Dashboard } from "./components/pages/Dashboard";

export class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    );
  }
}

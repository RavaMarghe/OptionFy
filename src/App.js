import React from "react";
import "./index.css";
import { Route, Routes } from "react-router";
import { Home } from "./components/pages/Home";
import { Dashboard } from "./components/pages/Dashboard";
import { ProtectedArea } from "./components/protection/ProtectedArea";
import { Easter } from "./components/protection/Easter";

export function App () {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedArea />}>
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/dashboard/easteregg" element={<Easter/>} />
        </Route>
      </Routes>
    );
  }


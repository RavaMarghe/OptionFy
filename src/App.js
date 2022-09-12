import React from "react";
import "./index.css";
import { Route, Routes } from "react-router";
import { Home } from "./components/pages/Home";
import { Dashboard } from "./components/pages/Dashboard";
import { ProtectedArea } from "./components/protection/ProtectedArea";
import { Easter } from "./components/protection/Easter";
import { Feature } from "./components/pages/Feature";
import Disclaimer from "./components/pages/Disclaimer";
import Privacy from "./components/pages/Privacy";
import { Terms } from "./components/pages/Terms";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feature" element={<Feature />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/terms" element={<Terms />} />
      <Route element={<ProtectedArea />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/easteregg" element={<Easter />} />
      </Route>
    </Routes>
  );
}

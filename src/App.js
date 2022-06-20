import React from "react";
import { Footer } from "./components/footer/Footer";

import "./index.css";
import { Header } from "./components/header/Header";
import Hero from "./components/header/Hero";
import { BodyContent } from "./components/body/BodyContent";
import ContactUs from "./components/footer/ContactUs";
import Pricing from "./components/footer/Pricing";

export class App extends React.Component {
  render() {
    return (
      <div className="bg-black">
        <Header />
        <Hero />
        <div className="bg-gradient-to-t from-violet-900 to-black">
          <BodyContent />
          <Pricing />
          <Footer />
          <ContactUs />
        </div>
      </div>
    );
  }
}

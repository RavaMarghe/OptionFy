import React from "react"
import { Footer } from "./Components/Footer";

import './index.css';
import { Header } from "./Components/Header";

import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Pricing from "./Components/Pricing"


export class App extends React.Component{
  render(){
      return (
          <div >
              <Nav />
              <Hero />
              <Pricing />
              <Footer />
          </div>
      )
  }
}
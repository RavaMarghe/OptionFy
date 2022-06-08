import React from "react"
import { Footer } from "./Components/Footer";

import './index.css';
import { Header } from "./Components/Header";


export class App extends React.Component{
  render(){
      return (
          <div >
              <Header />
              <Footer />
          </div>
      )
  }
}
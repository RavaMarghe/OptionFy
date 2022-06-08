import React from "react"

import './index.css';
import { MainNavbar } from "./Components/MainNavbar";
import { Header } from "./Components/Header";


export class App extends React.Component{
  render(){
      return (
          <div >
              <Header />
          </div>
      )
  }
}
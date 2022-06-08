import React from "react";
import { MainNavbar } from "./MainNavbar";

export class Header extends React.Component{

    render(){
        return (
            <div className="bg-green-100 h-5">
                <MainNavbar />
            </div>
        )
    }
}
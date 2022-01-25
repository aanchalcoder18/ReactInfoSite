import React from "react";
import reactLogo from "../images/react-icon-small.png"

function Nabvar(){
    return(
       <nav>
            <img src= {reactLogo} className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
       </nav>
    )
}

export default Nabvar;
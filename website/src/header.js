import React from "react";

function Header(){
    return(
      <div>
        <header>
          <nav className="nav">
            <img src="./public/react-logo.png" className="nav-logo" />
            <ul className="nav-items">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
      </div>
    )
   
}
export default Header;
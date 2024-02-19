import React from "react";
import { LOGO } from "../utils/constants";

const Header = () => (
  <div className="header">
    <div className="img-container">
      <img className="logo" src={LOGO} alt="logo" />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;

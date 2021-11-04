import React from "react";
import "../styles/playbrowser.css";
import About from "./About.js";

const Header = (props) => {
  return (
    <nav className="header">
      <p>Header</p>
      <button className="buttonThin buttonSolid">About</button>
    </nav>
  );
};
export default Header;

import React from "react";
import Modal from "react-modal";
import "../styles/playbrowser.css";
import About from "./About.js";
import "../styles/About.css";
import icon from "../images/theatre.png";
import { Link } from "react-router-dom";

Modal.setAppElement(document.getElementById("#appHeader"));

const Header = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const setModal = () => setIsOpen(!isOpen);

  const setShadow = () => {
    if (isOpen) {
      return "blurbox";
    } else {
      return "";
    }
  };

  const handleClick = () => {
    setModal();
  };

  return (
    <nav className="header" id="appHeader">
      <div>
        <Link to="/">
          <img src={icon} height="50" alt="back to home" title="Back to Home" />
        </Link>
      </div>
      <div className={setShadow()} onClick={handleClick}></div>
      <button className="buttonThin buttonSolid" onClick={handleClick}>
        About
      </button>
      {isOpen ? (
        <About onRequestClose={setModal} contentLabel="About Modal" />
      ) : null}
    </nav>
  );
};
export default Header;

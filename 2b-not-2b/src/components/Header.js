import React from "react";
import Modal from "react-modal";
import "../styles/playbrowser.css";
import About from "./About.js";
import "../styles/About.css"

Modal.setAppElement(document.getElementById('#appHeader'));

const Header = (props) => {

  const [isOpen, setIsOpen] = React.useState(false);

  const setModal = () => setIsOpen(!isOpen);

  const setShadow = () => {
    if(isOpen) {
        return("blurbox");
      } else {
        return("");
      }
  }

  const handleClick = () => {
    console.log("about here");
    setModal();
  }

  return (
    <nav className="header" id='appHeader'>
      <p>Play Browser</p>
      <div className={setShadow()}></div>
      <button className="buttonThin buttonSolid" onClick={handleClick}>About</button>
      {isOpen ? <About
             onRequestClose={setModal}
             contentLabel="About Modal" /> : null}
    </nav>
  );
};
export default Header;

import 'antd/dist/antd.css';
import Modal from "react-modal";
import "../styles/playbrowser.css";
import About from "./About.js";
import Profile from "./Profile.js";
import "../styles/About.css";
import icon from "../images/theatre.png";
import { Link } from "react-router-dom";
import { Drawer, Button } from 'antd';
import React, { useState, useEffect } from "react";
Modal.setAppElement(document.getElementById("#appHeader"));

const Header = (props) => {
  const [user, setUser] = useState();
  useEffect(() => {
      const curUrl = "/currentUser";
      fetch(curUrl)
      .then((resp) => resp.json())
      .then((currentUserId)=> {
        const url = "/api/user/" + currentUserId[0].id;
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          setUser(data[0]);
        })
      })

  })

  const [isOpen, setIsOpen] = React.useState(false);
  const [visible, setVisible] = useState(false);
  const setModal = () => setIsOpen(!isOpen);

  const showDrawer = () => {
    setVisible(true);
  }

  const onClose = () => {
    setVisible(false);
  }

  const setShadow = () => {
    if (isOpen) {
      return "blurbox";
    } else {
      return "";
    }
  };

  const profile = () => {
    if (user) {
      return (
        <div>
          <h1></h1>
          <p>id: {user.id}</p>
          <p>{user.details.firstname} {user.details.lastname}</p>
          <p>{user.details.city}, {user.details.country}</p>
        </div>
      )
    }
  }

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
      <div>
        {/* <button className="buttonThin buttonSolid">
        Profile
      </button> */}
      </div>
      <div className={setShadow()} onClick={handleClick}></div>
      <button className="buttonThin buttonSolid" onClick={handleClick}>
        About
      </button>
      {isOpen ? (
        <About onRequestClose={setModal} contentLabel="About Modal" />
      ) : null}
      <div>
        <Button type="primary" className="buttonThin buttonSolid" onClick={showDrawer}> About </Button>
        <Drawer title="About" placement="top" closable={true} onClose={onClose} visible={visible}>
          <p>this is here !!!</p>
        </Drawer>
      </div>
      <div>
        <Button type="primary" className="buttonThin buttonSolid" onClick={showDrawer}> Profile </Button>
        <Drawer title="Profile" placement="top" closable={true} onClose={onClose} visible={visible}>

          {profile()}

        </Drawer>
      </div>


    </nav>
  );
};
export default Header;

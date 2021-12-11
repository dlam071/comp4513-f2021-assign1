import "../styles/playbrowser.css";
import 'antd/dist/antd.css';
import About from "./About.js";
import "../styles/About.css";
import icon from "../images/theatre.png";
import { Link } from "react-router-dom";
import { Drawer, Button } from 'antd';
import React, { useState, useEffect } from "react";

const Header = (props) => {
  const [user, setUser] = useState();
  const [visible, setVisible] = useState(false);
  const [visibleAbout, setVisibleAbout] = useState(false);

  useEffect(() => {
    const curUrl = "/currentUser";
    fetch(curUrl)
      .then((resp) => resp.json())
      .then((currentUserId) => {
        const url = "/api/user/" + currentUserId[0].id;
        fetch(url)
          .then((resp) => resp.json())
          .then((data) => {
            setUser(data[0]);
          })
      })

  })



  const showDrawer = () => {
    setVisible(true);
  }

  const onClose = () => {
    setVisible(false);
  }

  const showAboutDrawer = () => {
    setVisibleAbout(true);
  }

  const onAboutClose = () => {
    setVisibleAbout(false);
  }

  //tried to make this a seperate component but it keeps breaking our code with a "minimized error" which doesn't make sense
  const profile = () => {
    if (user) {
      return (
        <div>
          <div>
            <h1>{user.details.firstname} {user.details.lastname}</h1>
            <p>{user.details.city}, {user.details.country}</p>
            <p>Email: {user.email}</p>
            <p>
              <h3>Membership info: </h3>
              <ul>
                <li>Date joined: {user.membership.date_joined}</li>
                <li>Last Updated: {user.membership.last_update}</li>
                <li>Likes: {user.membership.likes}</li>
              </ul>
            </p>
            <img src={user.picture.large} />
          </div>
        </div>
      )
    }
  }


  return (
    <nav className="header" id="appHeader">
      <div>
        <Link to="/">
          <img src={icon} height="50" alt="back to home" title="Back to Home" />
        </Link>
      </div>

      <div>
        <Button type="primary" className="buttonThin buttonSolid" onClick={showAboutDrawer}> About </Button>
        <Drawer title="About" placement="top" closable={true} onClose={onAboutClose} visible={visibleAbout}>
          <About />
        </Drawer>
      </div>
      <div>
        <Button type="primary" className="buttonThin buttonSolid" onClick={showDrawer}> Profile </Button>
        <Drawer title="Profile" placement="right" closable={true} onClose={onClose} visible={visible}>
          {profile()}
        </Drawer>
      </div>


    </nav>
  );
};
export default Header;

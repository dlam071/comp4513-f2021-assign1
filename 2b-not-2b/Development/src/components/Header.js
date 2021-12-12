import "../styles/playbrowser.css";
import "../styles/Header.css";
import "antd/dist/antd.css";
import About from "./About.js";
import "../styles/About.css";
import icon from "../images/theatre.png";
import { Link } from "react-router-dom";
import { Drawer, Button, Avatar } from "antd";
import React, { useState, useEffect } from "react";

const Header = (props) => {
  const [user, setUser] = useState();
  const [visible, setVisible] = useState(false);
  const [visibleAbout, setVisibleAbout] = useState(false);
  useEffect(() => {
    if (!user) {
      const curUrl = "/currentUser";
      fetch(curUrl)
        .then((resp) => resp.json())
        .then((currentUserId) => {
          const url = "/api/user/" + currentUserId[0].id;
          fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
              setUser(data[0]);
            });
        });
    }
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const showAboutDrawer = () => {
    setVisibleAbout(true);
  };

  const onAboutClose = () => {
    setVisibleAbout(false);
  };

  const renderProfile = () => {
    if (user) {
      return (
        <div>
          <Avatar size={64} icon={<img className="avatarHeader" src={user.picture.large} />}
            onClick={showDrawer}
          />
          <Drawer
            title="Profile"
            placement="right"
            closable={true}
            onClose={onClose}
            visible={visible}
            width={500}
          >
            {profile()}
          </Drawer>
        </div>
      )
    }
  }

  //tried to make this a seperate component but it keeps breaking our code with a "minimized error" which doesn't make sense
  const profile = () => {
    if (user) {
      return (
        <div className="profile">
          <div>
            <h1>
              {user.details.firstname} {user.details.lastname}
            </h1>
            <p>
              {user.details.city}, {user.details.country}
            </p>
            <p>Email: {user.email}</p>
            <p>Date joined: {user.membership.date_joined}</p>
            <p>Likes: {user.membership.likes}</p>
          </div>
          <div>
            <img className="pImage" src={user.picture.large} />
          </div>
          <div>
            <a href="/logout">
              <button className="buttonThin buttonSolid">
                Logout
              </button>
            </a>
          </div>
        </div>
      );
    }
  };

  return (
    <nav className="header" id="appHeader">
      <div>
        <Link to="/">
          <img src={icon} height="50" alt="back to home" title="Back to Home" />
        </Link>

      </div>
      <div className="profileButton">
      <div className="infoButton">
      <svg type="primary"
            onClick={showAboutDrawer}
            xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#2e4b8aff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      
      </svg>

          <Drawer
            title="About"
            placement="top"
            closable={true}
            onClose={onAboutClose}
            visible={visibleAbout}
            height="800"
    >
            <About />
          </Drawer>
        </div>
      {renderProfile()}
      </div>
    </nav>
  );
};
export default Header;

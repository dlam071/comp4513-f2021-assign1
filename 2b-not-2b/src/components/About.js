import React from "react";
import "../styles/template.css";
import "../styles/About.css";

const About = (props) => {
  return (
    <div className="aboutBox">
      <div className="assignInfo">
        <h1>Assignment 1</h1>
        <h3>COMP 4513: Randy Connolly</h3>
        <p>
          Designed by: Hatoon Al-Nakshabandi, Dylan Borchert, and Darren Lam
        </p>
        <a href="https://github.com/dborc610/comp4513-f2021-assign1">
          github Repo
        </a>
      </div>
      <div className="lists">
        <ul classNames="techUsed">
          <li><h2>Tech Used</h2></li>
          <li>React-modal</li>
          <li>React-router</li>
          <li>React-router-DOM</li>
          <li>React-tabs</li>
          <li>lodash</li>
          <li>Style-components</li>
          <li>react-highlight-words</li>
        </ul>
        <ul className="sources">
          <li><h2>Sources</h2></li>
          <li>
            Heart Logos from:
            <a
              target="_blank"
              href="https://fonts.google.com/icons?selected=Material+Icons+Outlined:assignment_returned&icon.query=heart"
            >
              Google Icons
            </a>
          </li>
          <li>
            Some button Styling from:
            <a
              target="_blank"
              href="https://moderncss.dev/css-button-styling-guide/"
            >
              here
            </a>
          </li>
          <li>
            Icons made by:
            <a target="_blank" href="https://www.freepik.com" title="Freepik">
              Freepik
            </a>
            from
            <a
              target="_blank"
              href="https://www.flaticon.com/"
              title="Flaticon"
            >
              www.flaticon.com
            </a>
          </li>
          <li>
            Scroll bar styles from:
            <a
              target="_blank"
              href="https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp"
            >
            here
            </a>
          </li>
          <li>
            Hosting tutorial from: 
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=aUW5GAFhu6s"
            >
            here
            </a>
          </li>
          <li>
            React Tabs Implemetation from: 
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=tBaBl7gpYhs"
            >
            here
            </a>
          </li>
          <li>
            Local storage code setup from:
            <a
              target="_blank"
              href="https://blog.logrocket.com/using-localstorage-react-hooks/"
            >
             here
            </a>
          </li>
    
        </ul>
      </div>
      <div className="close">
        <button
          className="buttonSolid buttonThin"
          onClick={props.onRequestClose}
        >
          Close &#10006;
        </button>
      </div>
    </div>
  );
};

export default About;

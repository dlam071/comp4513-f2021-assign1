import React from "react";
import "../styles/template.css";
import "../styles/About.css";

const About = (props) => {
  return (
    <div className="aboutBox">
      <div className="assignInfo">
        <h1 id="assignHead">Assignment 1</h1>
        <h3 id="assignSubHead">COMP 4513: Randy Connolly</h3>
        <p id="assignGroup">
          Designed by: Hatoon Al-Nakshabandi, Dylan Borchert, and Darren Lam
        </p>
        <a id="assignGit" href="https://github.com/dborc610/comp4513-f2021-assign1">
          github Repo
        </a>
      </div>
      <div className="lists">
        <ul className="techUsed">
          <li className="techItem"><h2 className="aboutList">Tech Used</h2></li>
          <li className="techItem">React-modal</li>
          <li className="techItem">React-router</li>
          <li className="techItem">React-router-DOM</li>
          <li className="techItem">React-tabs</li>
          <li className="techItem">lodash</li>
          <li className="techItem">Style-components</li>
          <li className="techItem">react-highlight-words</li>
        </ul>
        <ul className="sources">
          <li className="sourceItem"><h2 className="aboutList">Sources</h2></li>
          <li className="sourceItem">
            Heart Logos from:
            <a
              target="_blank"
              href="https://fonts.google.com/icons?selected=Material+Icons+Outlined:assignment_returned&icon.query=heart"
            >
              Google Icons
            </a>
          </li>
          <li className="sourceItem">
            Some button Styling from:
            <a
              target="_blank"
              href="https://moderncss.dev/css-button-styling-guide/"
            >
              here
            </a>
          </li>
          <li className="sourceItem">
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
          <li className="sourceItem">
            Scroll bar styles from:
            <a
              target="_blank"
              href="https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp"
            >
              here
            </a>
          </li>
          <li className="sourceItem">
            Hosting tutorial from:
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=aUW5GAFhu6s"
            >
              here
            </a>
          </li>
          <li className="sourceItem">
            Loading Animation from
            <a
              target="_blank"
              href="https://monophy.com/gifs/book-page-flip-turn-lMa32EDsr7NrDwg1no"
            >
              from
            </a>
            React Tabs Implemetation from:
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=tBaBl7gpYhs"
            >
              here
            </a>
          </li>
          <li className="sourceItem">
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

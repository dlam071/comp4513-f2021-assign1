import React from "react";
import "../styles/template.css";
import "../styles/About.css";

const About = (props) => {
  return (
    <div id="aboutBox">
      <ul>
        <li>
          Heart Logos from
          <a href="https://fonts.google.com/icons?selected=Material+Icons+Outlined:assignment_returned&icon.query=heart">
            Google Icons
          </a>
        </li>
        <li>
          Some button Styling
          <a href="https://moderncss.dev/css-button-styling-guide/">from</a>
        </li>
        <li>
          <a href="link">LINK</a>
        </li>
        <li>
          <a href="link">LINK</a>
        </li>
        <li>
          <a href="link">LINK</a>
        </li>
        <li>
          <a href="link">LINK</a>
        </li>
      </ul>
    </div>
  );
};

export default About;

import React from "react";
import Characters from "./Characters.js";
import DisplayPosts from "./Tabs";
import PlayDetails from "./PlayDetails";
import "../styles/Details.css";

const DetailsMain = (props) => {
  const readClickHelper = () => {
    if (props.fileExists) props.toggleReadText();
  };

  const file = () => {
    return (
      <button
        className={props.fileExists ? "button" : "button sadbutton"}
        title={props.fileExists ? "Read Text" : "No Text Available"}
        onClick={readClickHelper}
      >
        Read&#128214;
      </button>
    );
  };

  return (
    <div className="outer">
      <div className="playDetailsMain tabs">
        <div className="synopsis">
          <div>
            <h2> Synopsis:</h2>
            <p> {props.play.synopsis}</p>
            {file()}
          </div>
          {/* <button className="button" onClick={props.toggleReadText}>
            Read &#128214;
          </button> */}
        </div>
        <div className="detailsAndChar">
          <DisplayPosts
            chars={props.chars}
            play={props.play}
            fileExists={props.fileExists}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsMain;

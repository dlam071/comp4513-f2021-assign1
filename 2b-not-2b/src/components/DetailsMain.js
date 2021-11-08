import React from "react";
import Characters from "./Characters.js";
import DisplayPosts from "./Tabs";
import PlayDetails from "./PlayDetails";
import "../styles/Details.css";

const DetailsMain = (props) => {
  const file = () => {
    console.log(props.fileExists ? null : ".sadbutton" )
    return (
      <button className={props.fileExists ? "button" : "button sadbutton"} onClick={props.fileExists ? props.toggleReadText : null} >
        Read
      </button>
    );

    // .sadbutton {
    //   background-color: grey;
    //   cursor: not-allowed;
    // }
  };

  return (
    <div>
      <div className="playDetailsMain tabs">
        <div className="synopsis">
          <div>
            <h2> Synopsis:</h2>
            <p> {props.play.synopsis}</p>
            {file()}
          </div>
          {/* <button className="button" onClick={props.toggleReadText}>
            Read
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

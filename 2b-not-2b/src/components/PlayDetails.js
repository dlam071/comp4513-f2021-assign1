import React from "react";
import { Link } from "react-router-dom";
import wikipedia from "../images/wikipedia.jpg";
import gutenberg from "../images/gutenberg.jpg";
import shakespeareOrg from "../images/shakespeare.jpg";
import "../styles/Details.css";

const PlayDetails = (props) => {
  return (
    <div>
      <div className="detailItems">
        <div className="playDetails">
          <p>Composition: {props.play.likelyDate}</p>
          <p>Genre: {props.play.genre}</p>
          <div className="webLinks">
            <a target="_blank" href={props.play.wiki}>
              <img src={wikipedia} title="Wiki" className="webIcon" />
            </a>
            <a target="_blank" href={props.play.gutenberg}>
              <img src={gutenberg} title="Gutenberg" className="webIcon" />
            </a>
            <a target="_blank" href={props.play.shakespeareOrg}>
              <img
                src={shakespeareOrg}
                title="Shakespeare Org"
                className="webIcon"
              />
            </a>
          </div>
          <p>Description: {props.play.desc}</p>
        </div>
        <div className="closeButton">
          <Link to="/browse">
            <button className="button">Close</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlayDetails;

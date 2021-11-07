import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../styles/Details.css";
import Favorites from "./Favorites";
import wikipedia from "../images/wikipedia.jpg";
import gutenberg from "../images/gutenberg.jpg";
import shakespeareOrg from "../images/shakespeare.jpg";
import Characters from "./Characters.js";

const Details = (props) => {
  const [info, setInfo] = useState([]);
  const [chars, setChars] = useState([]);
  const [fileExists, setFileExists] = useState(false);
  useEffect(() => {
    //console.log( props.play)
    // let filename = props.play.filename;

    let filename = "hamlet.json"
    if (filename) {
      setFileExists(true);
      filename = filename.substring(0, filename.lastIndexOf(".")); //removes the .json extension in the filename
      const url =
        "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php?name=" + filename;

      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          setInfo(data);
          setChars(data.persona);
        });
    }
  }, []);

  const characters = () => {
    if (fileExists) {
      return <Characters chars={chars} />
    }
  }

  return (
    <section>
      <Header />
      <div className="playDetails tabs">
        <h2 className="title">{props.play.title}</h2>
        <div className="synopsis">
          <h2> Synopsis:</h2>
          <p> {props.play.synopsis}</p>
          <button className="button">Read</button>
        </div>
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
                <img src={shakespeareOrg} title="Shakespeare Org" className="webIcon" />
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
        <div className="playCharacters">
          {/* <Characters chars={chars} /> */}
          {characters()}
        </div>
      </div>

    </section>
  );
};

export default Details;

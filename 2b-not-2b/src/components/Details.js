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

  useEffect(() => {
    let s = props.play.filename;
    s = s.substring(0, s.lastIndexOf(".")); //removes the .json extension in the filename
    const url =
      "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php?name=" +
      s;

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setInfo(data);
        setChars(data.persona);
      });
  }, []);

  console.log(chars);

  return (
    <div>
      <Header />

      <section className="playDetails">
        {/* <Favorites
        favorites={props.favorites}
        plays={props.plays}
      /> */}

        <h2 className="title">{props.play.title}</h2>
        <div className="synopsis">
          Synopsis:
          <p> {props.play.synopsis}</p>
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
                <img
                  src={shakespeareOrg}
                  title="Shakespeare Org"
                  className="webIcon"
                />
              </a>
            </div>
            <p>Description: {props.play.desc}</p>
          </div>
          <div className="playCharacters">
            {/* <Characters chars={chars} /> */}
          </div>
          <div className="closeButton">
            <Link to="/browse">
              <button className="button">Close</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;

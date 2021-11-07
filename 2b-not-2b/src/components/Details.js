import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../styles/Details.css";
import Favorites from "./Favorites";
import Characters from "./Characters.js";

const Details = (props) => {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    let s = props.play.filename;
    s = s.substring(0, s.lastIndexOf(".")); //removes the .json extension in the filename
    const url = "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php?name=" + s;

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setInfo(data)
      })

  }, [])
console.log(props.play)


  return (
    <section className="playDetails">
      <Header />
      <Favorites
        favorites={props.favorites}
        plays={props.plays}
      />
      <div className="synopsis">
        <h2>{info.title}</h2>
        <p>Synopsis</p>
      </div>
      <div className="detailItems">
        <div className="playDetails">
          <p>Composition: {props.play.likelyDate}</p>
          <p>Genre: {props.play.genre}</p>
          <a href={props.play.wiki}>Wiki</a>
          <a href={props.play.gutenberg}>Gutenberg</a>
          <a href={props.play.shakespeareOrg}>Shakespeare Org</a>
          <p>Description: {props.play.desc}</p>
        </div>
        <div className="playCharacters">
        {/* <Characters chars={info.persona} /> */}
        </div>
        <div className="closeButton">
        <Link to="/browse">
          <button className="button">Close</button>
        </Link>
      </div>
      </div>
    </section>
  );
}

export default Details;
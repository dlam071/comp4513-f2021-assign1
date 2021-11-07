import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../styles/Details.css";
import Favorites from "./Favorites";


const Details = (props) => {
  return (
    <section className="playDetails">
      <Header />
      <Favorites
        favorites={props.favorites}
        plays={props.plays}
      />
      <div className="synopsis">
        <h2>Play Title</h2>
        <p>Play Synopsis</p>
      </div>
      <div className="detailItems">
        <div className="playDetails">
          <p>Composition</p>
          <p>Genre</p>
          <p>Wiki Link</p>
          <p>Gutenberg Link</p>
          <p>Shakespeare.org Link</p>
          <p>Description</p>
        </div>
        <div className="playCharacters">
          <p>Character Name</p>
        </div>
        <div className="playText">
          <p>Text</p>
        </div>
      </div>
      <div className="closeButton">
        <Link to="/browse">
          <button className="button">Close</button>
        </Link>
      </div>
    </section>
  );
}

export default Details;
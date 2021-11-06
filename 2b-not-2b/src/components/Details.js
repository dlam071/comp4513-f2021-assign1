import React from "react";
import Header from "./Header";
// import Favorites from "./Favorites";

const Details = (props) => {
  return (
    <section className="playDetails">
      <Header />
      {/* <Favorites
        updateFavorites={props.updateFavorites}
        favorites={props.favorites}
        plays={props.plays}
      /> */}
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
        
        </div>
      </div>
    </section>
  );
}

export default Details;
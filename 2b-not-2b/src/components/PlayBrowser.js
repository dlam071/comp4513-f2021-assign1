import React, { useState } from "react";
import Header from "./Header";
import Favorites from "./Favorites";
import PlayFilters from "./PlayFilters";
import PlayList from "./PlayList";
import "../styles/playbrowser.css";
const PlayBrowser = (props) => {
  return (
    //css and html tags are not set for this im just using it as an example ty and goodbye
    <section className="playBrowser"> 
      <Header />
      <Favorites
        updateFavorites={props.updateFavorites}
        favorites={props.favorites}
        plays={props.plays}
      />
      <PlayFilters plays={props.plays} saveFilters={props.saveFilters} />
      <PlayList
        plays={props.plays}
        updateFavorites={props.updateFavorites}
        favorites={props.favorites}
      />
    </section>
  );
};

export default PlayBrowser;

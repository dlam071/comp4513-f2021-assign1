import React from "react";
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
      <Favorites />
      <PlayFilters />
      <PlayList />

    </section>
  );
};

export default PlayBrowser;

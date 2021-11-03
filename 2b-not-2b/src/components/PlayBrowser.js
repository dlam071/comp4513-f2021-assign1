import React from "react";
import Header from "./Header";
import Favorites from "./Favorites";
import PlayFilters from "./PlayFilters";
import PlayList from "./PlayList";

const PlayBrowser = (props) => {
  return (
    <section className="PlayBrowser">
      <Header />
      <Favorites />
      <PlayFilters />
      <PlayList />
    </section>
  );
};

export default PlayBrowser;

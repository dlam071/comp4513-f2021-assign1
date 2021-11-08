import React, { useState } from "react";
import Header from "./Header";
import Favorites from "./Favorites";
import PlayFilters from "./PlayFilters";
import PlayList from "./PlayList";
import "../styles/playbrowser.css";
const PlayBrowser = (props) => {
  const [favoriteCollapse, setFavoriteCollapse] = useState("expandFavs");

  return (
    //css and html tags are not set for this im just using it as an example ty and goodbye
    <section className={"playBrowser " + favoriteCollapse}>
      <Header />
      <Favorites
        updateFavorites={props.updateFavorites}
        favorites={props.favorites}
        plays={props.plays}
        favoriteCollapse={favoriteCollapse}
        setFavoriteCollapse={setFavoriteCollapse}
      />
      <PlayFilters
        plays={props.plays}
        saveFilters={props.saveFilters}
        filterTitle={props.filterTitle}
        updateTitleFilter={props.updateTitleFilter}
      />
      <PlayList
        plays={props.plays}
        updateFavorites={props.updateFavorites}
        favorites={props.favorites}
        updateCurrentPlay={props.updateCurrentPlay}
        sortPlays={props.sortPlays}
      />
    </section>
  );
};

export default PlayBrowser;

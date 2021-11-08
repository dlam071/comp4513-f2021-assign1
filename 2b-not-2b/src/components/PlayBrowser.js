import React, { useState } from "react";
import Header from "./Header";
import Favorites from "./Favorites";
import PlayFilters from "./PlayFilters";
import PlayList from "./PlayList";
import "../styles/playbrowser.css";
const PlayBrowser = (props) => {
  return (
    //css and html tags are not set for this im just using it as an example ty and goodbye
    <section className={"playBrowser " + props.favoriteCollapse}>
      <Header />
      <Favorites
        updateFavorites={props.updateFavorites}
        favorites={props.favorites}
        plays={props.plays}
        updateCurrentPlay={props.updateCurrentPlay}
        favoriteCollapse={props.favoriteCollapse}
        setFavoriteCollapse={props.setFavoriteCollapse}
        info={props.info}
        updateInfo={props.updateInfo}
      />
      <PlayFilters
        plays={props.plays}
        saveFilters={props.saveFilters}
        filterTitle={props.filterTitle}
        updateTitleFilter={props.updateTitleFilter}
        resultStatus={props.resultStatus}
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

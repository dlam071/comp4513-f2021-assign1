import React from "react";
import "../styles/playbrowser.css";
import FavoriteItem from "./FavoriteItem";

const Favorites = (props) => {
  return (
    //think about where to add the toggle button
    <aside className="favorites">
      <p>Favorites</p>
      <table>
        {props.favorites.map((p) => (
          <FavoriteItem play={p} updateFavorites={props.updateFavorites} />
        ))}
      </table>
    </aside>
  );
};

export default Favorites;

import React from "react";
import "../styles/playbrowser.css";
import FavoriteItem from "./FavoriteItem";

const Favorites = (props) => {
  const updateFavoriteCollapse = () => {
    if (props.favoriteCollapse === "expandFavs") {
      props.setFavoriteCollapse("collapseFavs");
    } else {
      props.setFavoriteCollapse("expandFavs");
    }
  };

  return (
    //think about where to add the toggle button
    <aside className="favorites">
      <div className="hideFavs tableArea">
        <h2>Favorites</h2>
        <div className="favListTable">
          <table>
            <tr className="listHeader">
              <th className="listTitle">Title</th>
              <th></th>
            </tr>
            {props.favorites.map((p) => (
              <FavoriteItem 
                play={p} 
                updateFavorites={props.updateFavorites}
                updateCurrentPlay={props.updateCurrentPlay} 
              />
            ))}
          </table>
        </div>
      </div>
      <div onClick={updateFavoriteCollapse} className="favoriteCollapseButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#ffffff"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M10 17l5-5-5-5v10z" />
        </svg>
      </div>
    </aside>
  );
};

export default Favorites;

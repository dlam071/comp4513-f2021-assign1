import React from "react";
import { useState } from "react";
import Heart from "./Heart";
import { Link } from "react-router-dom";

const SinglePlay = (props) => {
  // This function is to change the heart logo depending on current favorite state
  const [heartStyle, setHeartStyle] = useState("favoriteHeartOutline");

  const updateHeartClassName = () => {
    if (heartStyle === "favoriteHeartOutline") {
      setHeartStyle("favoriteHeartSolid");
    } else {
      setHeartStyle("favoriteHeartOutline");
    }
  };

  const handleView = () => {
    props.updateCurrentPlay(props.play);
    props.updateInfo(props.info);
    // ;
  };

  return (
    <tr className="playItem">
      <Link to="/details" className="titleLink" onClick={handleView}>
        <td>{props.play.title}</td>
      </Link>
      <td className="listItemYear">{props.play.likelyDate}</td>
      <td>
        <Link to="/details">
          <button className="buttonThin" onClick={handleView}>
            View
          </button>
        </Link>
      </td>
      <td>
        <Heart
          play={props.play}
          updateFavorites={props.updateFavorites}
          favoriteStatus={heartStyle}
          favorites={props.favorites}
          updateHeartClassName={updateHeartClassName}
        />
      </td>
    </tr>
  );
};

export default SinglePlay;

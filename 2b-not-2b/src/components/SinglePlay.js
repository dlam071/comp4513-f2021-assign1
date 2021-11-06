import React from "react";
import { useState } from "react";
import Heart from "./Heart";

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

  return (
    <tr className="playItem">
      <td>{props.play.title}</td>
      <td className="listItemYear">{props.play.likelyDate}</td>
      <td>
        <button className="buttonThin">View</button>
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

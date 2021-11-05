import React from "react";
import { useState } from "react";
import Heart from "./Heart";

const SinglePlay = (props) => {
  // This function is to change the heart logo depending on current favorite state

  return (
    <tr className="playItem">
      <td>{props.play.title}</td>
      <td className="listItemYear">{props.play.likelyDate}</td>
      <td>
        <button className="buttonThin">View</button>
      </td>
      <td>
        <Heart />
      </td>
    </tr>
  );
};

export default SinglePlay;

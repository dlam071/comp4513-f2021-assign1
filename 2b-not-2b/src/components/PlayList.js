import React from "react";
import "../styles/playbrowser.css";
import "../styles/template.css";
import SinglePlay from "./SinglePlay.js";

const PlayList = (props) => {
  return (
    <section className="playList">
      <h2>List/Matches</h2>
      <table>
        <tr className="listHeader">
          <th className="listTitle">Title</th>
          <th className="listYear">Year</th>
          <th className="viewbtn"> </th>
          <th className="favbtn"> </th>
        </tr>
        {props.plays.map((p) => (
          <SinglePlay
            play={p}
            updateFavorites={props.updateFavorites}
            favorites={props.favorites}
          />
        ))}
      </table>
    </section>
  );
};

export default PlayList;

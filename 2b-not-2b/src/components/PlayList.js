import React from "react";
import { useState } from "react";
import "../styles/playbrowser.css";
import "../styles/template.css";
import SinglePlay from "./SinglePlay.js";

const PlayList = (props) => {

  const [title, setTitle] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [date, setDate] = useState([]);
  const sortTitle = () => {
    let sortedByTitle = [...props.plays];
    clicked ? setTitle(sortedByTitle) : setTitle(sortedByTitle.sort((a, b) => {
      if (a.title > b.title)
        return 1;
      else
        return -1
    }));
  }

  const sortDate = () => {
    let sortedByDate = [...props.plays];
    clicked ? setDate(sortedByDate) : setDate(sortedByDate.sort((a, b) => {
      if (a.likelyDate > b.likelyDate)
        return 1;
      else
        return -1
    }));
  }

  const handleClick = () => {
    clicked ? setClicked(false) : setClicked(true);
  }


  return (
    <section className="playList">
      <h2>List/Matches</h2>
      <table>
        <tr className="listHeader">
          <th className="listTitle" onClick={() => { handleClick(); sortTitle(); }}>Title</th>
          <th className="listYear" onClick={() => { handleClick(); sortDate(); }}>Year</th>
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

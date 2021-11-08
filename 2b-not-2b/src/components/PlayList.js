import React from "react";
import { useState } from "react";
import "../styles/playbrowser.css";
import "../styles/template.css";
import SinglePlay from "./SinglePlay.js";

const PlayList = (props) => {
  const defaultHeading = (heading) => {
    return (
      <p>
        <span>{heading}</span>
      </p>
    );
  };

  const [titleHeading, setTitleHeading] = useState(defaultHeading("Title"));
  const [dateHeading, setDateHeading] = useState(defaultHeading("Year"));
  const [clickedTitle, setClickedTitle] = useState(0);
  const [clickedDate, setClickedDate] = useState(0);

  const arrowUp = (heading) => {
    return (
      <p>
        <span>{heading}</span>&#9650;
      </p>
    );
  };

  const arrowDown = (heading) => {
    return (
      <p>
        <span>{heading}</span>&#11206;
      </p>
    );
  };

  const handleTitleClick = () => {
    setClickedDate(0);
    setDateHeading(defaultHeading("Year"));
    switch (clickedTitle) {
      case 0:
        setClickedTitle(1);
        setTitleHeading(arrowDown("Title"));
        props.sortPlays(1, 0);
        break;
      case 1:
        setClickedTitle(2);
        setTitleHeading(arrowUp("Title"));
        props.sortPlays(2, 0);
        break;
      case 2:
        setClickedTitle(0);
        setTitleHeading(defaultHeading("Title"));
        props.sortPlays(0, 0);
        break;
      default:
        break;
    }
  };

  const handleDateClick = () => {
    setClickedTitle(0);
    setTitleHeading(defaultHeading("Title"));
    switch (clickedDate) {
      case 0:
        setClickedDate(1);
        setDateHeading(arrowDown("Year"));
        props.sortPlays(0, 1);
        break;
      case 1:
        setClickedDate(2);
        setDateHeading(arrowUp("Year"));
        props.sortPlays(0, 2);
        break;
      case 2:
        setClickedDate(0);
        setDateHeading(defaultHeading("Year"));
        props.sortPlays(0, 0);
        break;
      default:
        break;
    }
  };

  return (
    <section className="playList">
      <h2>List/Matches</h2>
      <div className="playListTable">
        <table>
          <tr className="listHeader">
            <th className="listTitle" onClick={handleTitleClick}>
              {titleHeading}
            </th>
            <th className="listYear" onClick={handleDateClick}>
              {dateHeading}
            </th>
            <th className="viewbtn"> </th>
            <th className="favbtn"> </th>
          </tr>
          {props.plays.map((p) => (
            <SinglePlay
              play={p}
              updateCurrentPlay={props.updateCurrentPlay}
              updateFavorites={props.updateFavorites}
              favorites={props.favorites}
            />
          ))}
        </table>
      </div>
    </section>
  );
};

export default PlayList;

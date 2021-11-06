import React from "react";
import { useState } from "react";
import "../styles/playbrowser.css";
import "../styles/template.css";
import SinglePlay from "./SinglePlay.js";

const PlayList = (props) => {

  const [title, setTitle] = useState([]);
  const [clickedTitle, setClickedTitle] = useState(false);
  const [clickedDate, setClickedDate] = useState(false);
  const [date, setDate] = useState([]);

  const sortTitle = () => {
    let sortedByTitle = [...props.plays];
    clickedTitle ? setTitle(sortedByTitle) : setTitle(sortedByTitle.sort((a, b) => {
      if (a.title > b.title)
        return 1;
      else
        return -1
    }));
  }

  const sortDate = () => {
    let sortedByDate = [...props.plays];
    clickedDate ? setDate(sortedByDate) : setDate(sortedByDate.sort((a, b) => {
      if (a.likelyDate > b.likelyDate)
        return 1;
      else
        return -1
    }));
  }

  const handleTitleClick = () => {
    clickedTitle ? setClickedTitle(false) : setClickedTitle(true);
  }


  const handleDateClick = () => {
    clickedDate ? setClickedDate(false) : setClickedDate(true);
  }

  if (clickedTitle) {
    if (title.length > 0) {
      return (<section className="playList">
        <h2>List/Matches</h2>
        <table>
          <tr className="listHeader">
            <th className="listTitle" onClick={() => { handleTitleClick(); sortTitle(); }}>Title</th>
            <th className="listYear" onClick={() => { handleDateClick(); sortDate(); }}>Year</th>
            <th className="viewbtn"> </th>
            <th className="favbtn"> </th>
          </tr>
          {title.map((p) => (
            <SinglePlay
              play={p}
              updateFavorites={props.updateFavorites}
              favorites={props.favorites}
            />
          ))
          }
        </table>
      </section>);
    }
  }
  else if (clickedDate) {
    if (date.length > 0) {
      return (<section className="playList">
        <h2>List/Matches</h2>
        <table>
          <tr className="listHeader">
            <th className="listTitle" onClick={() => { handleTitleClick(); sortTitle(); }}>Title</th>
            <th className="listYear" onClick={() => { handleDateClick(); sortDate(); }}>Year</th>
            <th className="viewbtn"> </th>
            <th className="favbtn"> </th>
          </tr>
          {date.map((p) => (
            <SinglePlay
              play={p}
              updateFavorites={props.updateFavorites}
              favorites={props.favorites}
            />
          ))

          }
        </table>
      </section>);
    }
  }

  return (
    <section className="playList">
      <h2>List/Matches</h2>
      <table>
        <tr className="listHeader">
          <th className="listTitle" onClick={() => { handleTitleClick(); sortTitle(); }}>Title</th>
          <th className="listYear" onClick={() => { handleDateClick(); sortDate(); }}>Year</th>
          <th className="viewbtn"> </th>
          <th className="favbtn"> </th>
        </tr>
        {props.plays.map((p) => (
          <SinglePlay
            play={p}
            updateFavorites={props.updateFavorites}
            favorites={props.favorites}
          />
        ))

        }
      </table>
    </section>
  );






};

export default PlayList;

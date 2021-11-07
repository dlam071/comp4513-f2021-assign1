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
    clickedTitle
      ? setTitle(sortedByTitle)
      : setTitle(
          sortedByTitle.sort((a, b) => {
            if (a.title > b.title) return 1;
            else return -1;
          })
        );
  };

  const sortDate = () => {
    let sortedByDate = [...props.plays];
    clickedDate
      ? setDate(sortedByDate)
      : setDate(
          sortedByDate.sort((a, b) => {
            if (a.likelyDate > b.likelyDate) return 1;
            else return -1;
          })
        );
  };

  const handleTitleClick = () => {
    clickedTitle ? setClickedTitle(false) : setClickedTitle(true);
  };

  const handleDateClick = () => {
    clickedDate ? setClickedDate(false) : setClickedDate(true);
  };

  if (clickedTitle) {
    if (title.length > 0) {
      return (
        <section className="playList">
          <h2>List/Matches</h2>
          <div className="playListTable">
            <table>
              <tr className="listHeader">
                <th
                  className="listTitle"
                  onClick={() => {
                    handleTitleClick();
                    sortTitle();
                  }}
                >
                  Title
                </th>
                <th
                  className="listYear"
                  onClick={() => {
                    handleDateClick();
                    sortDate();
                  }}
                >
                  Year
                </th>
                <th className="viewbtn"> </th>
                <th className="favbtn"> </th>
              </tr>
              {title.map((p) => (
                <SinglePlay
                  play={p}
                  updateFavorites={props.updateFavorites}
                  favorites={props.favorites}
                />
              ))}
            </table>
          </div>
        </section>
      );
    }
  } else if (clickedDate) {
    if (date.length > 0) {
      return (
        <section className="playList">
          <h2>List/Matches</h2>
          <div className="playListTable">
            <table>
              <tr className="listHeader">
                <th
                  className="listTitle"
                  onClick={() => {
                    handleTitleClick();
                    sortTitle();
                  }}
                >
                  Title
                </th>
                <th
                  className="listYear"
                  onClick={() => {
                    handleDateClick();
                    sortDate();
                  }}
                >
                  Year
                </th>
                <th className="viewbtn"> </th>
                <th className="favbtn"> </th>
              </tr>
              {date.map((p) => (
                <SinglePlay
                  play={p}
                  updateFavorites={props.updateFavorites}
                  favorites={props.favorites}
                />
              ))}
            </table>
          </div>
        </section>
      );
    }
  }
  if (props.plays.length > 0) {
    return (
      <section className="playList">
        <h2>List/Matches</h2>
        <div className="playListTable">
          <table>
            <tr className="listHeader">
              <th
                className="listTitle"
                onClick={() => {
                  handleTitleClick();
                  sortTitle();
                }}
              >
                Title
              </th>
              <th
                className="listYear"
                onClick={() => {
                  handleDateClick();
                  sortDate();
                }}
              >
                Year
              </th>
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
        </div>
      </section>
    );
  } else {
    return (
      <section className="playList">
        <h1 id="label">No Matches Found</h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="50px"
          viewBox="0 0 24 24"
          width="50x"
          fill="#000000"
        >
          <g>
            <rect fill="none" height="24" width="24" />
          </g>
          <g>
            <g>
              <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8 c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z" />
              <circle cx="7" cy="12" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="17" cy="12" r="1.5" />
            </g>
          </g>
        </svg>
      </section>
    );
  }
};

export default PlayList;

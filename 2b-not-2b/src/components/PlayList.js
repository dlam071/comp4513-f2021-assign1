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

  //   if (clickedTitle) {
  //     if (title.length > 0) {
  //       return (
  //         <section className="playList">
  //           <h2>List/Matches</h2>
  //           <div className="playListTable">
  //             <table>
  //               <tr className="listHeader">
  //                 <th
  //                   className="listTitle"
  //                   onClick={() => {
  //                     handleTitleClick();
  //                     sortTitle();
  //                   }}
  //                 >
  //                   Title
  //                 </th>
  //                 <th
  //                   className="listYear"
  //                   onClick={() => {
  //                     handleDateClick();
  //                     sortDate();
  //                   }}
  //                 >
  //                   Year
  //                 </th>
  //                 <th className="viewbtn"> </th>
  //                 <th className="favbtn"> </th>
  //               </tr>
  //               {title.map((p) => (
  //                 <SinglePlay
  //                   play={p}
  //                   updateCurrentPlay={props.updateCurrentPlay}
  //                   updateFavorites={props.updateFavorites}
  //                   favorites={props.favorites}
  //                 />
  //               ))}
  //             </table>
  //           </div>
  //         </section>
  //       );
  //     }
  //   } else if (clickedDate) {
  //     if (date.length > 0) {
  //       return (
  //         <section className="playList">
  //           <h2>List/Matches</h2>
  //           <div className="playListTable">
  //             <table>
  //               <tr className="listHeader">
  //                 <th
  //                   className="listTitle"
  //                   onClick={() => {
  //                     handleTitleClick();
  //                     sortTitle();
  //                   }}
  //                 >
  //                   Title
  //                 </th>
  //                 <th
  //                   className="listYear"
  //                   onClick={() => {
  //                     handleDateClick();
  //                     sortDate();
  //                   }}
  //                 >
  //                   Year
  //                 </th>
  //                 <th className="viewbtn"> </th>
  //                 <th className="favbtn"> </th>
  //               </tr>
  //               {date.map((p) => (
  //                 <SinglePlay
  //                   updateCurrentPlay={props.updateCurrentPlay}
  //                   play={p}
  //                   updateFavorites={props.updateFavorites}
  //                   favorites={props.favorites}
  //                 />
  //               ))}
  //             </table>
  //           </div>
  //         </section>
  //       );
  //     }
  //   }
  //   if (props.plays.length > 0) {
  //     return (
  //       <section className="playList">
  //         <h2>List/Matches</h2>
  //         <div className="playListTable">
  //           <table>
  //             <tr className="listHeader">
  //               <th
  //                 className="listTitle"
  //                 onClick={() => {
  //                   handleTitleClick();
  //                   sortTitle();
  //                 }}
  //               >
  //                 Title
  //               </th>
  //               <th
  //                 className="listYear"
  //                 onClick={() => {
  //                   handleDateClick();
  //                   sortDate();
  //                 }}
  //               >
  //                 Year
  //               </th>
  //               <th className="viewbtn"> </th>
  //               <th className="favbtn"> </th>
  //             </tr>
  //             {props.plays.map((p) => (
  //               <SinglePlay
  //                 play={p}
  //                 updateCurrentPlay={props.updateCurrentPlay}
  //                 updateFavorites={props.updateFavorites}
  //                 favorites={props.favorites}
  //               />
  //             ))}
  //           </table>
  //         </div>
  //       </section>
  //     );
  //   } else {
  //     return (
  //       <section className="playList">
  //         <h1 id="label">No Matches Found</h1>

  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           enable-background="new 0 0 24 24"
  //           height="50px"
  //           viewBox="0 0 24 24"
  //           width="50x"
  //           fill="#000000"
  //         >
  //           <g>
  //             <rect fill="none" height="24" width="24" />
  //           </g>
  //           <g>
  //             <g>
  //               <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8 c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z" />
  //               <circle cx="7" cy="12" r="1.5" />
  //               <circle cx="12" cy="12" r="1.5" />
  //               <circle cx="17" cy="12" r="1.5" />
  //             </g>
  //           </g>
  //         </svg>
  //       </section>
  //     );
  //   }
};

export default PlayList;

import React from "react";
import "../styles/Details.css";

const Characters = (props) => {
  return (
    <div className="playCharacters">
      <div className="playCharactersTable">
        <table>
          <tr>
            <th>Character</th>
            <th>Description</th>
          </tr>
          {props.chars.map((p) => {
            return (
              <tr>
                <td>{p.player}</td>
                <td>{p.desc}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Characters;

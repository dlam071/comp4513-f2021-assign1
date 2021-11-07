import React from "react";
import "../styles/Details.css";
const Characters = (props) => {
    console.log(props.chars);
    return (
        <div className="playCharacters">
            <table>
                <tr>
                    <th>Character</th>
                    <th>Description</th>
                </tr>
                {props.chars.map(p => {
                    return (

                        <tr>
                            <td>{p.player}</td>
                            <td>{p.desc}</td>
                        </tr>

                    )

                })}
            </table>
        </div>
    )
}

export default Characters;
import React from "react";
import "../styles/playbrowser.css"
const PlayList = (props) => {
    return (
        <section className="playList">
            <h2>List/Matches</h2>
            <table>
                <tr>
                    <th>Title</th>
                    <th>year</th>
                    <th> </th>
                </tr>
                <tr>
                    {/* this is an example */}
                    <td>Hamlet</td>
                    <td>1970</td>
                    <td>
                        <button>❤️</button>
                        <button>View</button>
                    </td>
                </tr>
            </table>


        </section>



    );
}

export default PlayList;
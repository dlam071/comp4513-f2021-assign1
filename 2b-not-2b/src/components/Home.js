import React from "react";
import "./css/home.css"

const Home = (props) => {
    return (
        <div  className="homeDiv">
            <form className="homeForm">
                <legend id="legend">Play Browser</legend>
                <label id="label">Title</label>
                <input type="text" name="title" className="inputText"/>
                <button className="button"> Show Matching Plays</button> {/* add event listener */}
                <button className="button"> Show All Plays</button> {/* add event listener */}
                
            </form> 

            <p id="heroImg">Hero Image Credit</p>
        </div>


    );
}

export default Home;
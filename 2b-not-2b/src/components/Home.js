import React from "react";

const Home = (props) => {
    return (
        <div>
            <form className="home">
                <legend>Play Browser</legend>
                <label>Title</label>
                <input type="text" name="title" />
                 <button > Show Matching Plays</button> {/* add event listener */}
                <button > Show All Playes</button> {/* add event listener */}
                
            </form> 

            <h3>Hero Image Credit</h3>
        </div>


    );
}

export default Home;
import React from "react";
import "../styles/Home.css";
import "../styles/general.css";
import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <section className="Home">
      <div className="homeContainer">
        <legend id="legend">Play Browser</legend>
        <form className="homeForm">
          <label id="label">Title</label>
          <input type="text" name="title" className="inputText" />
          <button className="button showAllBtn">
            {/* <Link to="/Browse">Show Matching Plays</Link> */}
            Show Matching Plays
          </button>
          <button className="button searchBtn">
            {/* <Link to="/Browse">Show All Plays</Link> */}
            Show All Plays
          </button>
        </form>
      </div>
      <p id="heroImg">Hero Image Credit</p>
    </section>
  );
};

export default Home;

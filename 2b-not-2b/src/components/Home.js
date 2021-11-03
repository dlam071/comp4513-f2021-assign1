import React from "react";
import "../styles/Home.css";
import "../styles/general.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = (props) => {
  return (
    <section className="Home">
      <div className="homeContainer">
        <legend id="legend">Play Browser</legend>
        <form className="homeForm">
          <label id="label">Title</label>
          <input type="text" name="title" className="inputText" />
          <Link
            className="showAllLink"
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/browse"
          >
            <button className="button showAllBtn">Show Matching Plays</button>
          </Link>
          <Link
            className="searchLink"
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/browse"
          >
            <button className="button searchBtn">Show All Plays</button>
          </Link>
        </form>
      </div>
      <p id="heroImg">Hero Image Credit</p>
    </section>
  );
};

export default Home;

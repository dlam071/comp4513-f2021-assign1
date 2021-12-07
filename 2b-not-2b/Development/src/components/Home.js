import React from "react";
import "../styles/Home.css";
import "../styles/general.css";
import { Link } from "react-router-dom";
import { setState, useState } from "react";
import styled from "styled-components";

const Home = (props) => {
  const passFilter = (e) => {
    props.saveFilters(props.filterTitle, undefined, undefined, undefined);
  };

  const passBlankFilter = () => {
    props.saveFilters("", undefined, undefined, undefined);
    props.updateTitleFilter("");
  };

  const handleTitleChange = (e) => props.updateTitleFilter(e.target.value);

  return (
    <section className="Home">
      <div className="homeContainer">
        <legend id="legend">Play Browser</legend>
        <form className="homeForm">
          <label id="label">Title</label>
          <input
            type="text"
            name="title"
            className="inputText"
            defaultValue={props.filterTitle}
            onChange={handleTitleChange}
          />
          <Link className="showFilteredLink" to="/browse">
            <button onClick={passFilter} className="button showFiltered">
              Show Matching Plays
            </button>
          </Link>
          <Link className="showAllLink" to="/browse">
            <button onClick={passBlankFilter} className="button ShowAll">
              Show All Plays
            </button>
          </Link>
        </form>
      </div>
      <p id="heroImg">
        Photo by{" "}
        <a href="https://unsplash.com/@hulkiokantabak?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Hulki Okan Tabak
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/shakespeare?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p>
    </section>
  );
};

export default Home;

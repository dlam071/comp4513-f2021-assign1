import React from "react";
import "../styles/Home.css";
import "../styles/general.css";
import { Link } from "react-router-dom";
import { setState, useState} from "react";
import styled from "styled-components";




const Home = (props) => {
  const [title, setTitle] = useState();

  const passFilter = (e) => {
    e.preventDefault();
    props.saveFilters(title);
  }

  const handleTitleChange = (e) => setTitle(e.target.value);


  return (
    <section className="Home">
      <div className="homeContainer">
        <legend id="legend">Play Browser</legend>
        <form className="homeForm" onSubmit={passFilter}>
          <label id="label">Title</label>
          <input type="text" 
                 name="title"
                 className="inputText"
                 defautValue={title}
                 onChange={handleTitleChange} />
          <Link className="showFilteredLink" to="/browse">
            <button className="button showFiltered"
                    type="submit">Show Matching Plays</button>
          </Link>
          <Link className="showAllLink" to="/browse">
            <button className="button ShowAll">Show All Plays</button>
          </Link>
        </form>
      </div>
      <p id="heroImg">Hero Image Credit</p>
    </section>
  );
};

export default Home;

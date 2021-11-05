import React from "react";
import { useState } from "react";
import "../styles/playbrowser.css";
const PlayFilters = (props) => {
    const [clicked, setClicked] = useState(false);
    const [title, setTitle] = useState();
    const [beforeInput, setBefore] = useState();
    const [afterInput, setAfter] = useState();
    const [genre, setGenre] = useState();
    const [bText, setBText] = useState("More Filters");

    const handleClick = () => {

        clicked ? setClicked(false) : setClicked(true);
    };

    const changeButtonText = () => {
        clicked ? setBText("More Filters") : setBText("Less Filters");
    }

    const handleBeforeChange = (e) => {
        setBefore(e.target.value);
    };

    const handleAfterChange = (e) => {
        setAfter(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    };

    const passFilters = (e) => {
        e.preventDefault();
        props.saveFilters(title, beforeInput, afterInput, genre);
    };

    const reseFilters = () => {
        props.saveFilters(undefined, undefined, undefined, undefined);
        setTitle();
        setBefore();
        setAfter();
        setGenre();
    };

    const moreFilters = () => {
        if (clicked) {
            return (
                <div>
                    <label id="label">Year</label>

                    <div>

                        <label id="label" >
                            <input type="radio" name="year" defaultValue="before" />
                            Before
                            <input
                                type="text"
                                name="before"
                                className="inputYear"
                                value={beforeInput}
                                onChange={handleBeforeChange}
                            />
                        </label>
                       
                        <label id="label">Genre</label>
                        <select name="genre" onClick={handleGenreChange}>
                            <option value="">Select a Genre</option>
                            {props.plays.map((p) => (
                                <option defaultValue={genre} onClick={handleGenreChange}>
                                    {p.genre}
                                </option>
                            ))}
                        </select>
                        <label id="label" className="after">
                            <input type="radio" name="year" value="after" />
                            After
                            <input
                                type="text"
                                name="after"
                                className="inputYear"
                                defaultValue={afterInput}
                                onChange={handleAfterChange}
                            />
                        </label>
                    </div>
                </div>
            );
        }
    };

    return (
        <section className="playFilters">
            {/* <h2>Play List </h2> */}

            <form className="filter" onSubmit={passFilters}>
                <div className="titleDiv">
                    <label id="label">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="inputText"
                        defaultValue={title}
                        onChange={handleTitleChange}
                    />
                    <div className="groups">
                        <button type="submit" className="buttonThin">
                            Filter
                        </button>
                        <button
                            onClick={reseFilters}
                            value="Reset"
                            type="reset"
                            className="buttonThin"
                        >
                            Clear
                        </button>
                       
                       <button type="button" className="buttonThin moreFilters" onClick= {()=>{handleClick(); changeButtonText();}}
                        >{bText}</button>

                        </div>
                </div>
                <div className="clickedForm">




                    {moreFilters()}
                </div>
            </form>
        </section>
    );
};



export default PlayFilters;

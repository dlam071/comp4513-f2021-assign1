import React from "react";
import { useState } from "react";
import { generatePath } from "react-router-dom";
import "../styles/playbrowser.css";
const PlayFilters = (props) => {
    const [clicked, setClicked] = useState(false);
    const [title, setTitle] = useState(props.filterTitle);
    const [beforeInput, setBefore] = useState();
    const [afterInput, setAfter] = useState();
    const [genre, setGenre] = useState();
    const [bText, setBText] = useState("More Filters >");

    const handleClick = () => {

        clicked ? setClicked(false) : setClicked(true);
    };

    const changeButtonText = () => {
        clicked ? setBText("More Filters >") : setBText("Less Filters <");
    }

    const filterGenres = () => {
        let genres = props.plays.map(p => p.genre);
        let filteredGenres = genres.filter((item, index) => genres.indexOf(item) === index);
        return (
            filteredGenres.map((p) => <option defaultValue={genre} onClick={handleGenreChange}>{p}</option>)
        );


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
                <div className="clickedForm">
                    <label id="label">Year</label>

                    <div>

                        <label id="label" >
                            {/* <input type="radio" name="year" defaultValue="before" /> */}
                            From
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
                            {
                                filterGenres()

                            }


                        </select>
                        <label id="label" className="after">
                            {/* <input type="radio" name="year" value="after" /> */}
                            To
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
                    <div className="buttonGroup">
                        <div>
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
                        </div>
                        <button type="button" className="buttonThin moreFilters" onClick={() => { handleClick(); changeButtonText(); }}
                        >{bText}</button>

                    </div>
                </div>

                {moreFilters()}

            </form>
        </section>
    );
};



export default PlayFilters;

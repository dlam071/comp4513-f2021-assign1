import React from "react";
import { useState } from "react";
import "../styles/playbrowser.css"
const PlayFilters = (props) => {
    const [clicked, setClicked] = useState(false);
    const [title, setTitle] = useState();
    const [beforeInput, setBefore] = useState();
    const [afterInput, setAfter] = useState();
    const [genre, setGenre] = useState();

    const handleClick = () => {
        clicked ? setClicked(false) : setClicked(true);
    }

    const handleBeforeChange = (e) => {
        setBefore(e.target.value);
        
    }

    const handleAfterChange = (e) => {
        setAfter(e.target.value);
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    }


    const passFilters = () => {
        this.props.saveFilters(title, beforeInput, afterInput, genre);
    }

    const moreFilters = () => {
        if (clicked) {

            return (
                <div>
                    <label id="label">Year</label>
                    <label id="label">
                        <input type="radio" name="year" value="before" />
                        Before
                        <input type="text" name="before" className="inputYear" defaultValue={beforeInput} onChange={handleBeforeChange} />
                    </label>
                    <label id="label">
                        <input type="radio" name="year" value="after" />
                        After   
                        <input type="text" name="after" className="inputYear" defaultValue={afterInput} onChange={handleAfterChange} />
                    </label>
                    <label id="label">Genre</label>
                    <select name="genre" onClick={handleGenreChange}>
                        <option value="">Select a Genre</option>
                        {
                            props.plays.map(p => <option defaultValue={genre} onClick={handleGenreChange}>{p.genre}</option>)
                        }
                    </select>
                    <button type="submit" className="buttonThin" onClick={passFilters}>Filter</button>
                    <button type="reset"className="buttonThin">Clear</button>
                </div>

            )
        } else {

            return null;
        }
        


    }


    return (
        <section className="playFilters">
            <h2>Play List </h2>


            <form className="filter">
                <div className="titleDiv">
                    <label id="label">Title</label>
                    <input type="text" name="title" className="inputText" defaultValue={title} onChange={handleTitleChange} />
                </div>
                <div className="clickedForm">
                    <div className="moreFilters" onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg>
                    </div>

                    {moreFilters()}
                </div>
            </form>
        </section>

    )
}


// const Genre = (props) => {
    
//     console.log(props.plays);
//     // le   t set = [...new Set(props.play.genre)]
//     return (
//         props.plays.map(p => <option value={p.genre} onClick={handleGenreChange}>{p.genre}</option>)
//     );
// }


export default PlayFilters;
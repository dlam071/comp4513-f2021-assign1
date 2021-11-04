import React from "react";
import "../styles/playbrowser.css"
const PlayFilters = (props) => {
    return (
        <section className="playFilters">
            <h2>Play List </h2>
            <form className="filter">
                <label>Title</label>
                <input type="text" name="title" />
                <label>Year</label>
                <label>
                    <input type="radio" name="year" value="before" />
                    Before
                    <input type="text" name="before" />
                </label>
                <label>
                    <input type="radio" name="year" value="after" />
                    After
                    <input type="text" name="after" />
                </label>
                <label>Genre</label>
                <select name="genre">
                    <option value="">Select a Genre</option>
                    <option value="option1">option 1</option>
                    <option value="option2">option 2</option>
                    <option value="option3">option 3</option>
                </select>
                <button type="submit">Filter</button>
                <button type="reset">Clear</button>
            </form>


        </section>
    );
}

export default PlayFilters;
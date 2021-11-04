import React from "react";
import "../styles/playbrowser.css"
const PlayFilters = (props) => {
    const moreFilters = () => {
        console.log("here")
        if (true) {
            return (
                <form>
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
            )
        } else {
        }
    }


    return (

        <section className="playFilters">
            <h2>Play List </h2>
            <form className="filter">
                <label>Title</label>
                <input type="text" name="title" />
                <div className="moreFilters" onClick={moreFilters}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg>
                </div>
            </form>
        </section>

    )
}

export default PlayFilters;
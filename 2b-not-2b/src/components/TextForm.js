import React from "react";
import Characters from "./Characters";

const TextForm = (props) => {
  
    return(
      <section className="textForm">
        <p>TextForm</p>

        <form className="form">
          <div className="form">
            <label id="act">Act</label>
            <select name="act" /*onClick={handleActChange}*/>
              <option value="">Select an Act</option>
            </select>
            <label id="scene">Scene</label>
            <select name="scene" /*onClick={handleSceneChange}*/>
              <option value="">Select a Scene</option>
            </select>
            <label id="character">Character</label>
            <select name="character" /*onClick={handleCharacterChange}*/>
              <option value="">Select a Character</option>
            </select>

            {/* <label id="searchTerm">Search
            <input
              type="text"
              name="term"
              className="searchTerm"
            />
    </label> */}
          </div>
        </form>
        <button className="button" onClick={props.toggleReadText}>Close</button>
      </section >
    );
}

export default TextForm;
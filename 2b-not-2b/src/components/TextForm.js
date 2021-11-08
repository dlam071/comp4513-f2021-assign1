import React, { useState} from "react";
import Characters from "./Characters";

const TextForm = (props) => {

  const [act, setAct] = useState();

  const generateActs = () => {
    console.log(props.text);
    let acts = props.text.map((n) => n.name);
    let generatedActs = acts.filter(
      (item, index) => acts.indexOf(item) === index
    );
    return generatedActs.map((n) => (
      <option defaultValue={acts} onClick={handleActChange}>
        {n}
      </option>
    ));
  };

  const handleActChange = (e) => setAct(e.target.value);

    return(
      <section className="textForm">
        <p>TextForm</p>

        <form className="form">
          <div className="form">
            <label id="act">Act</label>
            <select name="act" /*onClick={handleActChange}*/>
              <option value="">Select an Act</option>
              {generateActs()}
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
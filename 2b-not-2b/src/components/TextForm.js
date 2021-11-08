import React, { useState } from "react";

const TextForm = (props) => {
  const [act, setAct] = useState();
  const [scene, setScene] = useState();
  const [character, setCharacter] = useState();

  const generateActs = () => {
    let acts = props.text.map((n) => n.name);
    return acts.map((n) => (
      <option defaultValue={n} onClick={handleActChange}>
        {n}
      </option>
    ));
  };

  const generateScenes = () => {
    if (act) {
      let chosen = props.text.find((t) => act === t.name);
      let scenes = chosen.scenes.map((n) => n.name);
      return scenes.map((n) => (
        <option defaultValue={n} onClick={handleSceneChange}>
          {n}
        </option>
      ));
    } else {
      return null;
    }
  };

  const generateCharacters = () => {
    console.log(props.chars);
    let characters = props.chars.map((n) => n.player);
    return characters.map((n) => (
      <option defaultValue={n} onClick={handleCharacterChange}>
        {n}
      </option>
    ));
  };

  const handleActChange = (e) => setAct(e.target.value);
  const handleSceneChange = (e) => setScene(e.target.value);
  const handleCharacterChange = (e) => setCharacter(e.target.value);

  return (
    <section className="">
      <div className="formArea">
        <p>TextForm</p>

        <form className="form">
          <div className="form">
            <label id="act">Act</label>
            <select name="act" onClick={handleActChange}>
              <option value="">Select an Act</option>
              {generateActs()}
            </select>

            <label id="scene">Scene</label>
            <select name="scene" onClick={handleSceneChange}>
              <option value="">Select a Scene</option>
              {generateScenes()}
            </select>

            <label id="character">Character</label>
            <select name="character" onClick={handleCharacterChange}>
              <option value="">Select a Character</option>
              {generateCharacters()}
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
        <button className="button" onClick={props.toggleReadText}>
          Back
        </button>
      </div>
    </section>
  );
};

export default TextForm;

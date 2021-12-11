import React, { useState } from "react";

const TextForm = (props) => {
  const generateActs = () => {
    if (props.text) {
      let acts = props.text.map((n) => n.name);
      return acts.map((n) => (
        <option defaultValue={n} onClick={props.handleActChange}>
          {n}
        </option>
      ));
    } else {
      console.log(props.text);
      return <p>error rendering text</p>;
    }
  };

  const generateScenes = () => {
    if (props.actForm) {
      let chosen = props.text.find((t) => props.actForm === t.name);
      let scenes = chosen.scenes.map((n) => n.name);
      return scenes.map((n) => (
        <option defaultValue={n} onClick={props.handleSceneChange}>
          {n}
        </option>
      ));
    } else {
      console.log(props.actForm);
      return null;
    }
  };

  const generateCharacters = () => {
    if (props.characters) {
      let characters = props.chars.map((n) => n.player);
      return characters.map((n) => (
        <option defaultValue={n} onClick={props.handleCharacterChange}>
          {n}
        </option>
      ));
    } else {
      console.log(props.characters);
      return <p>error rendering text</p>;
    }
  };

  return (
    <section className="">
      <div className="formArea">
        <p>TextForm</p>

        <form className="form">
          <div className="form">
            <label id="act">Act</label>
            <select name="act" onChange={props.handleActChange}>
              <option value="">Select an Act</option>
              {generateActs()}
            </select>

            <label id="scene">Scene</label>
            <select name="scene" onChange={props.handleSceneChange}>
              <option value="">Select a Scene</option>
              {generateScenes()}
            </select>

            <label id="character">Character</label>
            <select name="character" onChange={props.handleCharacterChange}>
              <option value="">Select a Character</option>
              {generateCharacters()}
            </select>

            <label id="searchTerm">
              <p>Search</p>
              <input
                onChange={props.updateSearch}
                type="text"
                name="term"
                className="searchTerm"
              />
            </label>
          </div>
        </form>
        <button className="button" onClick={props.toggleReadText}>
          Back &#128216;
        </button>
      </div>
    </section>
  );
};

export default TextForm;

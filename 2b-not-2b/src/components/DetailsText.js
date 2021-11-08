import React, { useEffect, useState } from "react";
import TextForm from "./TextForm";
import ScriptText from "./ScriptText";
import "../styles/DetailsText.css";

const DetailsText = (props) => {
  const [actForm, setActForm] = useState("");
  const [sceneForm, setSceneForm] = useState("");
  const [characterForm, setCharacterForm] = useState("");
  const [playSearchWord, setPlaySearchWord] = useState([""]);

  const handleActChange = (e) => setActForm(e.target.value);
  const handleSceneChange = (e) => setSceneForm(e.target.value);
  const handleCharacterChange = (e) => setCharacterForm(e.target.value);

  const updateSearch = (e) => {
    setPlaySearchWord([e.target.value]);
  };

  return (
    <section className="playText">
      <div className="textForm">
        <TextForm
          toggleReadText={props.toggleReadText}
          text={props.text}
          chars={props.chars}
          actForm={actForm}
          sceneForm={sceneForm}
          characterForm={characterForm}
          updateSearch={updateSearch}
          handleActChange={handleActChange}
          handleSceneChange={handleSceneChange}
          handleCharacterChange={handleCharacterChange}
        />
      </div>
      <div className="scriptText">
        <ScriptText
          play={props}
          info={props.info}
          playSearchWord={playSearchWord}
          actForm={actForm}
          sceneForm={sceneForm}
          characterForm={characterForm}
        />
      </div>
    </section>
  );
};

export default DetailsText;

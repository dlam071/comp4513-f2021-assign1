import React from "react";
import "../styles/DetailsText.css";
import "../styles/DetailsText.css";
import Highlighter from "react-highlight-words";

const Scene = (props) => {
  const findHighLight = (speech, scene) => {
    if (true) {
      return (
        <Highlighter
          searchWords={props.playSearchWord}
          autoEscape={true}
          textToHighlight={"" + speech.lines}
        />
      );
    }
  };

  return (
    <div className="scene">
      {props.act.scenes.map((s) => {
        if (s.name === props.sceneForm || !props.sceneForm) {
          return (
            <div className="subScene">
              <h2 className="sceneName">
                {s.name} - {s.title}
              </h2>
              <h2 className="sceneDirec">{s.stageDirection}</h2>
              {s.speeches.map((speech) => {
                if (
                  speech.speaker === props.characterForm ||
                  !props.characterForm
                ) {
                  return (
                    <div className="sceneLine">
                      <h3>{speech.speaker}</h3>
                      <p>{findHighLight(speech, s)}</p>
                    </div>
                  );
                }
              })}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Scene;

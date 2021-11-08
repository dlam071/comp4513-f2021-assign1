import React from "react";
import "../styles/DetailsText.css";
import "../styles/DetailsText.css";
import Highlighter from "react-highlight-words";

const Scene = (props) => {
  const findHighLight = (speech, scene) => {
    if (
      (props.actName === props.actForm || !props.actForm) &&
      (scene.name === props.sceneForm || !props.sceneForm) &&
      (speech.speaker === props.characterForm || !props.characterForm)
    ) {
      return (
        <Highlighter
          searchWords={props.playSearchWord}
          autoEscape={true}
          textToHighlight={"" + speech.lines}
        />
      );
    } else {
      return (
        <Highlighter
          searchWords={[""]}
          autoEscape={true}
          textToHighlight={"" + speech.lines}
        />
      );
    }
  };

  return (
    <div className="scene">
      {props.act.scenes.map((s) => {
        return (
          <div className="subScene">
            <h2 className="sceneName">
              {s.name} - {s.title}
            </h2>
            <h2 className="sceneDirec">{s.stageDirection}</h2>
            {s.speeches.map((speech) => {
              return (
                <div className="sceneLine">
                  <h3>{speech.speaker}</h3>
                  {/* Add highLighter here */}
                  <p>{findHighLight(speech, s)}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Scene;

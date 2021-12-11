import React from "react";
import Scene from "./Scene";

const ScriptText = (props) => {
  if (props.info.acts) {
    let play = props.info;
    return (
      <section className="scriptText">
        <h1 className="playTitle">{play.title}</h1>
        {play.acts.map((act) => {
          if (act.name === props.actForm || !props.actForm) {
            return (
              <div className="act">
                <h2 className="actName">{act.name}</h2>
                <Scene
                  act={act}
                  actName={act.name}
                  actForm={props.actForm}
                  sceneForm={props.sceneForm}
                  characterForm={props.characterForm}
                  playSearchWord={props.playSearchWord}
                />
              </div>
            );
          }
        })}
      </section>
    );
  } else {
    return null;
  }
};

export default ScriptText;

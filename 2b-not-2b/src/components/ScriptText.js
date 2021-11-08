import React from "react";
import Scene from "./Scene";

const ScriptText = (props) => {
  console.log(props.info.acts);
  let play = props.info;

  const sceneStuff = (act) => {
    return act.scenes.title;
  };

  return (
    <section className="scriptText">
      <h1>{play.title}</h1>
      {play.acts.map((act) => {
        return (
          <div>
            <h2>{act.name}</h2>
            <Scene act={act} />
          </div>
        );
      })}
    </section>
  );
};

export default ScriptText;

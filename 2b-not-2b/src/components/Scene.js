import React from "react";

const Scene = (props) => {
  return (
    <div>
      {props.act.scenes.map((s) => {
        return (
          <div>
            <h2>{s.name}</h2>
            <h2>{s.title}</h2>
            <h2>{s.stageDirection}</h2>
            {s.speeches.map((speech) => {
              return (
                <div>
                  <h3>{speech.speaker}</h3>
                  <p>{speech.lines}</p>
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

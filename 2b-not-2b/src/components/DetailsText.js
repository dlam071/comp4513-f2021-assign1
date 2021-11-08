import React, { useEffect, useState } from "react";
import TextForm from "./TextForm";
import ScriptText from "./ScriptText";
import "../styles/DetailsText.css";

const DetailsText = (props) => {
  return (
    <section className="playText">
      <div className="textForm">
        <TextForm
          toggleReadText={props.toggleReadText}
          text={props.text}
          chars={props.chars}
        />
      </div>
      <div className="scriptText">
        <ScriptText play={props} info={props.info} />
      </div>
    </section>
  );
};

export default DetailsText;

import React from "react";

const TextForm = (props) => {
console.log(props.toggleReadText)
  return (
    <section className="textForm">
      <p>TextForm</p>

      <button className="button" onClick={props.toggleReadText}>Close</button>
    </section>
  );
}

export default TextForm;
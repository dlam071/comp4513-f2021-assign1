import React, { useState } from "react";
import Characters from "./Characters";

const TextForm = (props) => {

  const [act, setAct] = useState();
  const [scene, setScene] = useState();
  const [character, setCharacter] = useState();

  const generateActs = () => {
    let acts = props.text.map(n => n.name);
    let generatedActs = acts.filter(
      (item, index) => acts.indexOf(item) === index
    );
    return generatedActs.map((n) => (
      <option defaultValue={acts} onClick={handleActChange}>
        {n}
      </option>
    ));
  };

  const generateScenes = () => {
    console.log("woo")
    if(act) {
      let chosen = props.text.find(t => act == t.name);
    console.log( chosen);
      console.log(props.text[act])
      let scenes = chosen.scenes.map(n => n.name);
      let generatedActs = scenes.filter(
        (item, index) => scenes.indexOf(item) === index
      );
      return generatedActs.map((n) => (
        <option defaultValue={scenes} onClick={handleSceneChange}>
          {n}
        </option>
      ));

    } else {
      return null;
    }

  };

  // const generateScenes = () => {
  //   console.log(props.scenes);

  //   let scenes = props.text.map(a => {
  //     return a.scenes.map(s => {
  //       console.log(s.name);
  //       return s.name;
  //     });
  //   })

  //   return (
  //     scenes.map(p => {
  //       return (<option defaultValue={p} onClick={handleSceneChange}>
  //         {p}
  //       </option>
  //       )
  //     }))



  //   // let scenes = act.scenes.map(n => n.name);
  //   // let generatedScenes = scenes.filter(
  //   //   (item, index) => scenes.indexOf(item) === index
  //   // );
  //   // return generatedScenes.map(n => (
  //   //   <option defaultValue={scenes} onClick={handleSceneChange}>
  //   //     {scenes}
  //   //   </option>
  //   // ));
  // };

  const handleActChange = (e) => {
    setAct(e.target.value);
  }
  const handleSceneChange = (e) => setScene(e.target.value);

  return (
    <section className="textForm">
      <p>TextForm</p>

      <form className="form">
        <div className="form">
          <label id="act">Act</label>
          <select name="act" onClick={handleActChange}>
            <option value="">Select an Act</option>
            {generateActs()}
          </select>

          <label id="scene">Scene</label>
          <select name="scene" /*onClick={handleSceneChange}*/>
            <option value="">Select a Scene</option>
            {generateScenes()}
          </select>

          <label id="character">Character</label>
          <select name="character" /*onClick={handleCharacterChange}*/>
            <option value="">Select a Character</option>
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
      <button className="button" onClick={props.toggleReadText}>Close</button>
    </section >
  );
}

export default TextForm;
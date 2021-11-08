import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Header from "./Header";
import "../styles/Details.css";
import Favorites from "./Favorites";
// import wikipedia from "../images/wikipedia.jpg";
// import gutenberg from "../images/gutenberg.jpg";
// import shakespeareOrg from "../images/shakespeare.jpg";
import Characters from "./Characters.js";
import DisplayPosts from "./Tabs";
import PlayDetails from "./PlayDetails";
import DetailsMain from "./DetailsMain";
import DetailsText from "./DetailsText";

const Details = (props) => {
  const [info, setInfo] = useState([]);
  const [chars, setChars] = useState([]);
  const [fileExists, setFileExists] = useState(false);
  useEffect(() => {
    //console.log( props.play)
    let filename = props.play.filename;

    // let filename = "hamlet.json";
    if (filename) {
      setFileExists(true);
      filename = filename.substring(0, filename.lastIndexOf(".")); //removes the .json extension in the filename
      const url =
        "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php?name=" + filename;

      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          setInfo(data);
          setChars(data.persona);
        });
    } else {
      setFileExists(false)
    }
  }, []);

  const characters = () => {
    if (fileExists) {
      return <Characters chars={chars} />
    }
  }

  const [favoriteCollapse, setFavoriteCollapse] = useState("expandFavs");
  const [readText, setReadText] = useState(false);

  const handleClickRead = () => {
    if (!readText) {
      return <DetailsMain play={props.play} chars={chars} fileExists={fileExists}/>
    } else {
      return <DetailsText play={props.play} />
    }
  }

  return (
    <section className="playDetails">
      <Header />
      <h2 className="title">{props.play.title}</h2>
      <Favorites
        updateFavorites={props.updateFavorites}
        favorites={props.favorites}
        plays={props.plays}
        favoriteCollapse={favoriteCollapse}
        setFavoriteCollapse={setFavoriteCollapse} 
      />
      {handleClickRead()}
      
    </section>
  );
};

export default Details;

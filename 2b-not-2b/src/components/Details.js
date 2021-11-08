import React, { useEffect, useState } from "react";
import Header from "./Header";
import "../styles/Details.css";
import Favorites from "./Favorites";
import DetailsMain from "./DetailsMain";
import DetailsText from "./DetailsText";
import Heart from "./Heart";
import { update } from "lodash";

const Details = (props) => {
  const [loadedDetailsStatus, setLoadedDetailsStatus] = useState(false);
  const [text, setText] = useState([]);
  const [chars, setChars] = useState([]);
  const [fileExists, setFileExists] = useState(false);

  const [heartStyle, setHeartStyle] = useState("favoriteHeartOutline");

  const updateHeartClassName = () => {
    if (heartStyle === "favoriteHeartOutline") {
      setHeartStyle("favoriteHeartSolid");
    } else {
      setHeartStyle("favoriteHeartOutline");
    }
  };

  const getStoredPlayDetails = (key, data) => {
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    if (initial) {
      props.updateInfo(initial);
    } else {
      localStorage.setItem(key, JSON.stringify(data));
    }
  };

  useEffect(() => {
    if (!loadedDetailsStatus || true) {
      let filename = props.play.filename;
      console.log(` fetching: ${props.play.filename}`);
      if (filename) {
        props.updateFileExists(true);
        filename = filename.substring(0, filename.lastIndexOf(".")); //removes the .json extension in the filename
        const url =
          "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php?name=" +
          filename;

        fetch(url)
          .then((resp) => resp.json())
          .then((data) => {
            setText(data.acts);
            setChars(data.persona);
            props.updateInfo(data);
            getStoredPlayDetails(`play-${data.short}`, data);
          });
      } else {
        props.updateFileExists(false);
      }
      setLoadedDetailsStatus(true);
    }
  }, []);

  const [readText, setReadText] = useState(false);

  const handleClickRead = () => {
    if (!props.readText) {
      return (
        <DetailsMain
          play={props.play}
          chars={chars}
          fileExists={props.fileExists}
          toggleReadText={props.toggleReadText}
        />
      );
    } else {
      return (
        <DetailsText
          play={props.play}
          toggleReadText={props.toggleReadText}
          chars={chars}
          text={text}
          info={props.info}
        />
      );
    }
  };

  return (
    <section className={"playDetails " + props.favoriteCollapse}>
      <Header />
      <section className="title">
        <Heart
          play={props.play}
          updateFavorites={props.updateFavorites}
          favoriteStatus={heartStyle}
          favorites={props.favorites}
          updateHeartClassName={updateHeartClassName}
        />
        <h2>{props.play.title}</h2>
      </section>
      <Favorites
        updateFavorites={props.updateFavorites}
        favorites={props.favorites}
        plays={props.plays}
        updateCurrentPlay={props.updateCurrentPlay}
        favoriteCollapse={props.favoriteCollapse}
        setFavoriteCollapse={props.setFavoriteCollapse}
        info={props.info}
        updateInfo={props.updateInfo}
        fetchInfo={props.fetchInfo}
      />
      {handleClickRead()}
    </section>
  );
};

export default Details;

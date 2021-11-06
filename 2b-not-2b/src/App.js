import logo from "./logo.svg";
import "./styles/App.css";
import Home from "./components/Home.js";
import PlayBrowser from "./components/PlayBrowser.js";
import PlayDetails from "./components/PlayDetails.js";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as cloneDeep from "lodash/cloneDeep";

function App() {
  const [plays, setPlays] = useState([]);
  const [filteredPlays, setFilteredPlays] = useState(plays);
  const [favorites, setFavorites] = useState([]);

  const updateFavorites = (fav) => {
    const copyFavs = cloneDeep(favorites);
    const favorite = copyFavs.find((p) => p.id === fav.id);
    if (!favorite) {
      copyFavs.push(fav);
    } else {
      const index = copyFavs.indexOf(favorite);
      copyFavs.splice(index, 1);
    }
    setFavorites(copyFavs);
    console.log(copyFavs);
  };

  useEffect(() => {
    const url =
      "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setPlays(data);
        setFilteredPlays(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const saveFilters = (title, beforeInput, afterInput, genre) => {
    let playsCopy = [...plays];
    console.log("title");
    if (title) {
      playsCopy = playsCopy.filter((p) =>
        p.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (beforeInput && afterInput) {
      playsCopy = playsCopy.filter((p) => p.likelyDate >= beforeInput && p.likelyDate <= afterInput);
    } else if (beforeInput) {
      playsCopy = playsCopy.filter((p) => p.likelyDate > beforeInput);
    } else if (afterInput) {
      playsCopy = playsCopy.filter((p) => p.likelyDate < afterInput);
    } else if (genre) {
      playsCopy = playsCopy.filter((p) => p.genre === genre);
    }
    setFilteredPlays(playsCopy);
  };

  return (
    <Routes>
      <Route path="/" element={<Home plays={filteredPlays}
        favorites={favorites}
        SaveFilters={saveFilters}
        updateFavorites={updateFavorites} />} />
      <Route
        path="/browse"
        element={
          <PlayBrowser
            plays={filteredPlays}
            favorites={favorites}
            saveFilters={saveFilters}
            updateFavorites={updateFavorites}
          />
        }
      />
    </Routes>

  );
}

export default App;

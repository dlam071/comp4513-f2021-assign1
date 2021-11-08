import logo from "./logo.svg";
import "./styles/App.css";
import Home from "./components/Home.js";
import PlayBrowser from "./components/PlayBrowser.js";
import PlayDetails from "./components/PlayDetails.js";
import Details from "./components/Details.js";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as cloneDeep from "lodash/cloneDeep";

function App() {
  const [loadedDataStatus, setLoadedDataStatus] = useState(false);
  const [plays, setPlays] = useState(() => {
    const saved = localStorage.getItem("plays");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [filteredPlays, setFilteredPlays] = useState([]);
  const [sortedPlays, setSortedPlays] = useState([]);
  const [savedFilteredPlays, setSavedFilteredPlays] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [filterTitle, setFilterTitle] = useState("");
  const [currentPlay, setCurrentPlay] = useState(() => {
    const saved = localStorage.getItem("curPlay");
    const initialValue = JSON.parse(saved);
    return initialValue || plays[0];
  });
  const [favoriteCollapse, setFavoriteCollapse] = useState("expandFavs");
  const [resultStatus, setResultStatus] = useState("");

  const updateCurrentPlay = (play) => {
    setCurrentPlay(play);
    localStorage.setItem("curPlay", JSON.stringify(play));
  };

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
    localStorage.setItem("favorites", JSON.stringify(copyFavs));
  };

  useEffect(() => {
    if (!loadedDataStatus) {
      const url =
        "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php";
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          setPlays(data);
          localStorage.setItem("plays", JSON.stringify(data));
          setFilteredPlays(data);
          setSortedPlays(data);
          setSavedFilteredPlays(data);
        })
        .catch((err) => console.error(err));
      setLoadedDataStatus(true);
    }
  }, [plays]);

  const saveFilters = (title, beforeInput, afterInput, genre) => {
    let playsCopy = [...plays];
    console.log("title");
    if (title) {
      playsCopy = playsCopy.filter((p) =>
        p.title.toLowerCase().includes(title.toLowerCase())
      );
      setFilterTitle(title);
    }
    if (beforeInput) {
      playsCopy = playsCopy.filter((p) => p.likelyDate >= beforeInput);
    }
    if (afterInput) {
      playsCopy = playsCopy.filter((p) => p.likelyDate <= afterInput);
    }
    if (genre) {
      playsCopy = playsCopy.filter((p) => p.genre === genre);
    }
    setFilteredPlays(playsCopy);
    setSortedPlays(playsCopy);
    setSavedFilteredPlays(playsCopy);
    if (playsCopy.length > 0) {
      playsCopy.length === 1
        ? setResultStatus(`${playsCopy.length} Result`)
        : setResultStatus(`${playsCopy.length} Results`);
    } else {
      setResultStatus("No Results Found");
    }
  };

  const sortPlays = (titleSort, dateSort) => {
    console.log(`Title: ${titleSort} \n Year: ${dateSort}`);
    let copySortedPlays = [...sortedPlays];
    if (titleSort > 0) {
      console.log("Sorting title");
      copySortedPlays.sort((a, b) => {
        if (titleSort === 1) {
          if (a.title > b.title) return 1;
          else return -1;
        } else if (titleSort === 2) {
          if (a.title < b.title) return 1;
          else return -1;
        } else {
          return 0;
        }
      });
    } else if (dateSort > 0) {
      console.log("Sorting Date");
      copySortedPlays.sort((a, b) => {
        if (dateSort === 1) {
          if (a.likelyDate > b.likelyDate) return 1;
          else return -1;
        } else if (dateSort === 2) {
          if (a.likelyDate < b.likelyDate) return 1;
          else return -1;
        } else {
          return 0;
        }
      });
    } else {
      console.log("NO Sorting");
      copySortedPlays = [...savedFilteredPlays];
    }
    setFilteredPlays(copySortedPlays);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            plays={filteredPlays}
            favorites={favorites}
            saveFilters={saveFilters}
            updateFavorites={updateFavorites}
            filterTitle={filterTitle}
            updateTitleFilter={setFilterTitle}
          />
        }
      />
      <Route
        path="/browse"
        element={
          <PlayBrowser
            plays={filteredPlays}
            favorites={favorites}
            saveFilters={saveFilters}
            updateFavorites={updateFavorites}
            filterTitle={filterTitle}
            updateTitleFilter={setFilterTitle}
            updateCurrentPlay={updateCurrentPlay}
            sortPlays={sortPlays}
            favoriteCollapse={favoriteCollapse}
            setFavoriteCollapse={setFavoriteCollapse}
            resultStatus={resultStatus}
          />
        }
      />
      <Route
        path="/details"
        element={
          <Details
            plays={filteredPlays}
            favorites={favorites}
            updateFavorites={updateFavorites}
            play={currentPlay}
            favoriteCollapse={favoriteCollapse}
            setFavoriteCollapse={setFavoriteCollapse}
          />
        }
      />
    </Routes>
  );
}

export default App;

import logo from "./logo.svg";
import "./styles/App.css";
import Home from "./components/Home.js";
import PlayBrowser from "./components/PlayBrowser.js";
import PlayDetails from "./components/PlayDetails.js";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [plays, setPlays] = useState([]);

  useEffect(() => {
    const url =
      "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setPlays(data))
      .catch((err) => console.error(err));
  });

  const saveFilters = (title, beforeInput, afterInput, genre) => {
    const playsCopy = [...plays];
    if (title) {
      console.log("title");
      let titlefiltered = playsCopy.filter(p => p.title == title);
      playsCopy.push(titlefiltered);
    }
    if (beforeInput) {
      console.log("before");
      let beforefiltered = playsCopy.filter(p => p.likelyDate < beforeInput);
      playsCopy.push(beforefiltered);
    }
    if (afterInput) {
      console.log("");
      let afterfiltered = playsCopy.filter(p => p.likelyDate > afterInput);
      playsCopy.push(afterfiltered);
    }
    if (genre) {
      console.log("");
      let genrefiltered = playsCopy.filter(p => p.genre == genre);
      playsCopy.push(genrefiltered);
    }
    setPlays(playsCopy);
  }


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<PlayBrowser plays={plays} saveFilters={saveFilters}/>} />
    </Routes>
  );
}

export default App;

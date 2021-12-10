import logo from "./logo.svg";
import "./styles/App.css";
import Home from "./components/Home.js";
import PlayBrowser from "./components/PlayBrowser.js";
import PlayDetails from "./components/PlayDetails.js";
import Details from "./components/Details.js";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import * as cloneDeep from "lodash/cloneDeep";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { createContext } from "react";

function App() {
  const [loadedDataStatus, setLoadedDataStatus] = useState("loading");
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
  const [info, setInfo] = useState([]);
  const [fileExists, setFileExists] = useState(false);
  const [readText, setReadText] = useState(false);

  const [text, setText] = useState([]);
  const [chars, setChars] = useState([]);

  const [user, setUser] = useState({});


  const updateText = (value) => setText(value);

  const updateChars = (value) => setChars(value);

  const toggleReadText = () => {
    if (!readText) {
      setReadText(true);
    } else {
      setReadText(false);
    }
  };

  const updateFileExists = (state) => {
    setFileExists(state);
  };

  const fetchInfo = (fetchPlay) => {
    
    let filename = fetchPlay.filename;
    if (filename) {
      setFileExists(true);
      filename = filename.substring(0, filename.lastIndexOf(".")); //removes the .json extension in the filename
      const url =
        "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php?name=" +
        filename;

      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          setText(data.acts);

          setChars(data.persona);

          setInfo(data);
        });
    } else {
      setReadText(false);
      setFileExists(false);
    }
  };

  const context = createContext(null);

  // const userProvider = (apiUser) => {
  //   fetchUser(apiUser);

  //   return (
  //     <context.Provider value={user}>
  //       {apiUser}
  //     </context.Provider>
  //   );
  // };

  
  // const fetchUser = (fetchedUser) => {
    const fetchUser = () => {
      // let userID = fetchedUser.id;
      const url = "/api/user/1";
      // console.log("here?")
      fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data);
        // console.log(data)
      })
    }
    
    const runFetch = () =>{
      fetchUser();
    }
 
    
    const updateInfo = (info) => {
      setInfo(info);
      setText(info.acts);
      setChars(info.persona);
    };

    const updateCurrentPlay = (play) => {
      setCurrentPlay(play);
      fetchInfo(play);
      localStorage.setItem("curPlay", JSON.stringify(play));
    };

    const updateFavorites = (fav) => {
      const copyFavs = cloneDeep(favorites);
      const favorite = copyFavs.find((p) => p.id === fav.id);
      if (!favorite) {
        copyFavs.push(fav);
        console.log("added!");
      } else {
        const index = copyFavs.indexOf(favorite);
        copyFavs.splice(index, 1);
        console.log("removed!");
      }
      setFavorites(copyFavs);
      localStorage.setItem("favorites", JSON.stringify(copyFavs));
    };

    useEffect(() => {
      if (loadedDataStatus === "loading") {
        setLoadedDataStatus("loading");
        // const url = "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php";
        const url = "/api/list";
        fetch(url)
          .then((resp) => resp.json())
          .then((data) => {
            setPlays(data);
            localStorage.setItem("plays", JSON.stringify(data));
            setFilteredPlays(data);
            setSortedPlays(data);
            setSavedFilteredPlays(data);
            setLoadedDataStatus("");
          })
          .catch((err) => console.error(err));
      }
      runFetch();
    }, []);

    const saveFilters = (title, beforeInput, afterInput, genre) => {
      let playsCopy = [...plays];
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
      let copySortedPlays = [...sortedPlays];
      if (titleSort > 0) {
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
        copySortedPlays = [...savedFilteredPlays];
      }
      setFilteredPlays(copySortedPlays);
    };

    const location = useLocation();
    // console.log("location", location);

    return (
      // <TransitionGroup>
      //   <CSSTransition key={location.key} timeout={300} classNames="fade"> - We spent so much time on this part and it broke it completely.
      // We really really tried here. This is the reason why our assignment is late.
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
              user={user}
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
              info={info}
              updateInfo={updateInfo}
              fetchInfo={fetchInfo}
              loadedDataStatus={loadedDataStatus}
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
              updateCurrentPlay={updateCurrentPlay}
              play={currentPlay}
              favoriteCollapse={favoriteCollapse}
              setFavoriteCollapse={setFavoriteCollapse}
              info={info}
              updateInfo={updateInfo}
              fetchInfo={fetchInfo}
              fileExists={fileExists}
              updateFileExists={updateFileExists}
              readText={readText}
              toggleReadText={toggleReadText}
              text={text}
              chars={chars}
              updateText={updateText}
              updateChars={updateChars}
            />
          }
        />
      </Routes>
      //   </CSSTransition>
      // </TransitionGroup>
    );
  }

  export default App;

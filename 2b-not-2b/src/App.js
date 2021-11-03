import logo from "./logo.svg";
import "./styles/App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import PlayBrowser from "./components/PlayBrowser.js";
import PlayDetails from "./components/PlayDetails.js";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/Browse" exact component={PlayBrowser} />
    </div>
  );
}

export default App;

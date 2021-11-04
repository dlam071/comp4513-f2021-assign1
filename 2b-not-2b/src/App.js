import logo from "./logo.svg";
import "./styles/App.css";
import Home from "./components/Home.js";
import PlayBrowser from "./components/PlayBrowser.js";
import PlayDetails from "./components/PlayDetails.js";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/Browse" component={PlayBrowser} />
      </Routes>
    </div>
  );
}

export default App;

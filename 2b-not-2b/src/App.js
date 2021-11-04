import logo from "./logo.svg";
import "./styles/App.css";
import Home from "./components/Home.js";
import PlayBrowser from "./components/PlayBrowser.js";
import PlayDetails from "./components/PlayDetails.js";

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

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<PlayBrowser />} />
    </Routes>
  );
}

export default App;

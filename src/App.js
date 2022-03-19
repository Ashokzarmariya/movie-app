import { Routes, Route } from "react-router-dom";
import "./App.css";
import Details from "./components/Details.jsx/Details";
import Home from "./components/Home/main/Home";
import NavbarTailwind from "./components/Navbar/NavbarTailwind";
import SearchResults from "./components/searchResults/SearchResults";
import Genres from "./components/Section/Genres";
import TopMovies from "./components/Section/TopMovies";
import Video from "./components/video/Video";

function App() {
  return (
    <div className="App">
      <NavbarTailwind />
      
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/genre/:genres" exact element={<Genres />}></Route>
        <Route path="/:id" exact element={<TopMovies/>}></Route>
        <Route path="/movie/:id" exact element={<Details />}></Route>
        <Route path="/movie/trailer/:key" exact element={<Video />}></Route>
        <Route path="/search/:moviename" exact element={<SearchResults/>}></Route>
    
      </Routes>
    </div>
  );
}

export default App;

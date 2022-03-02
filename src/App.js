import { Routes, Route } from "react-router-dom";
import "./App.css";
import Details from "./components/Details.jsx/Details";
import Home from "./components/Home/Home";
import NavbarTailwind from "./components/Navbar/NavbarTailwind";
import Genres from "./components/Section/Genres";
import TopMovies from "./components/Section/TopMovies";

function App() {
  return (
    <div className="App">
      <NavbarTailwind />
      
      
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/genre/:genres" exact element={<Genres />}></Route>
        <Route path="/:id" exact element={<TopMovies/>}></Route>
        <Route path="movie/:id" exact element={<Details/>}></Route>
    
      </Routes>
    </div>
  );
}

export default App;

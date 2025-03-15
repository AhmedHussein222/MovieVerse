import {   BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Component/Movies/Movies";
import Header from "./Component/Header/Header";
import Home from "./Pages/Home/Home";
import Details from "./Component/Details/Details";
import Favorite from "./Component/Favorite/Favorite";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Movies/:pageNumber" element={<Movies />} />
          <Route path="/Details/:id" element={<Details/>} />
          <Route path="/Favorite" element={<Favorite/>} />
        </Routes>
    </BrowserRouter>
        
    </>
  );
}



export default App;

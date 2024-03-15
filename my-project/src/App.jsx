import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import Favorites from "./Pages/Favorites/Favorites";

const App = () => {
  return (
    <div className="min-h-screen p-6 text-grey-600 text-lg">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe-item/:id" element={<Details />} />
        <Route path="/favorite" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;

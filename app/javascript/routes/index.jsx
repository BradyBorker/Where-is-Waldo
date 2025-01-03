import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Game from "../components/Game"
import Scores from "../components/Scores";

export default (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/game/:map' element={<Game />} />
            <Route path='/:map/scores' element={<Scores />} />
        </Routes>
    </Router>
);
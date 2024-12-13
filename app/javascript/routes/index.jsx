import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Game from "../components/Game"

export default (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/game/:map' element={<Game />} />
        </Routes>
    </Router>
);
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Map from "./Map";
import Header from "./Header";
import Timer from "./Timer";
import { maps } from "./App";

const Game = () => {
    const [playing, setPlaying] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    const mapTitle = useParams().map;
    const mapObj = maps.find((map) => map.title == mapTitle);

    const startGame = () => {
        setPlaying((playState) => !playState);
    }

    return (
        <>
            <Header />
            <div className="game-map">
                <div className="game-state">{playing ?
                    <Timer elapsedTime={elapsedTime} setElapsedTime={setElapsedTime} />
                    : <button onClick={startGame}>Start</button>}
                </div>
                <Map src={mapObj.src} title={mapObj.title} blurred={!playing} />
            </div>
        </>
    )
}

export default Game;
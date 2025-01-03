import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Map from "./Map";
import Header from "./Header";
import Timer from "./Timer";
import Marker from "./Marker";
import { maps } from "./App";

const Game = () => {
    const [playing, setPlaying] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [coordinates, setCoordinates] = useState({});

    const mapTitle = useParams().map;
    const mapObj = maps.find((map) => map.title == mapTitle);

    const startGame = () => {
        setPlaying((playState) => !playState);
    }

    const endGame = () => {
        setPlaying((playState) => !playState);
        console.log(elapsedTime)
        setCoordinates({})
    }

    const clickMap = (e) => {
        if (e.target.className !== "active-map") return;

        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const normX = x / e.target.width;
        const normY = y / e.target.height;
        setCoordinates({ x, y, normX, normY })
    }

    const submitCoordinates = (character = 'waldo') => {
        const normCoordinates = JSON.stringify({ x: coordinates.normX, y: coordinates.normY });

        const url = `/api/v1/maps/${mapTitle}/characters/${character}?coordinates=${normCoordinates}`;
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                if (res) endGame();
            })
    }

    useEffect(() => {
        submitCoordinates();
    }, [])

    return (
        <>
            <Header />
            <div className="game-map-container" onClick={playing ? clickMap : undefined}>
                {playing && Object.keys(coordinates).length > 0 && <Marker coordinates={[coordinates.x, coordinates.y]} submitCoordinates={submitCoordinates} />}
                <div className="start-timer">{playing ?
                    <Timer elapsedTime={elapsedTime} setElapsedTime={setElapsedTime} />
                    : <button onClick={startGame}>Start</button>}
                </div>
                <Map src={mapObj.src} title={mapObj.title} blurred={!playing} setCoordinates={setCoordinates} />
            </div>
        </>
    )
}

export default Game;
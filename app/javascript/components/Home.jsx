import React from "react";
import { Link } from "react-router-dom";
import Map from "./Map";

const beachMap = '/images/map-1.jpg';
const raceMap = '/images/map-2.jpg';
const fruitMap = '/images/map-3.jpg';
const spaceMap = '/images/map-4.jpg';

export default () => (
    <>
        <h1>Where's Waldo!</h1>
        <div className="maps-container">
            {[beachMap, raceMap, fruitMap, spaceMap].map((map) => {
                const mapFile = map.match(/map-\d/i);
                return <Link to={`/game/${mapFile}`} key={mapFile}><Map src={map} id={mapFile} /></Link>
            })}
        </div>
    </>
)
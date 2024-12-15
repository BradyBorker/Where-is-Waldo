import React from "react";
import { Link } from "react-router-dom";
import Map from "./Map";
import Header from "./Header";
import { maps } from "./App";

export default () => (
    <>
        <Header />
        <div className="maps-container">
            {maps.map((map) => {
                return <Link to={`/game/${map.title}`} key={map.title}><Map src={map.src} title={map.title} /></Link>
            })}
        </div>
    </>
)

export { maps }
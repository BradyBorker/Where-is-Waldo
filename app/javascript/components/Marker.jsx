import React from "react";

const Marker = ({ coordinates, submitCoordinates }) => {
    const [x, y] = [coordinates.x, coordinates.y];
    const normCoordinates = [coordinates.normX, coordinates.normY];

    return (
        <>
            <div style={{ left: `${x - 5}px`, top: `${y - 5}px` }} className="selection-container">
                <div className="marker"></div>
                <div className="character-select">
                    <img src="/images/waldo.png" alt="Waldo" onClick={() => submitCoordinates(normCoordinates)} />
                </div>
            </div>
        </>
    )
}

export default Marker;
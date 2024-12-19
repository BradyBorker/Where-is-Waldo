import React from "react";

const Marker = ({ coordinates }) => {
    const [x, y] = coordinates;

    return (
        <>
            <div style={{ left: `${x - 5}px`, top: `${y - 5}px` }} className="selection-container">
                <div className="marker"></div>
                <div className="character-select"></div>
            </div>
        </>
    )
}

export default Marker;
import React from "react";

const Marker = ({ coordinates, submitCoordinates }) => {
    const [x, y] = coordinates;

    return (
        <>
            <div style={{ left: `${x - 6}px`, top: `${y - 6}px` }} className="selection-container">
                <div className="marker"></div>
                <div className="character-select">
                    <img src="/images/waldo.png" alt="waldo" onClick={() => submitCoordinates('waldo')} />
                </div>
            </div>
        </>
    )
}

export default Marker;
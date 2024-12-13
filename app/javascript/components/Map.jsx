import React from "react";

const Map = ({ src, id }) => (
    <div className="map-container">
        <img src={src} alt={`map ${id}`} />
    </div>
)

export default Map;
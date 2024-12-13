import React from "react";

const Map = ({ src, id }) => (
    <>
        <img src={src} alt={`Where is Waldo map: ${id}`} />
    </>
)

export default Map;
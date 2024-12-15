import React from "react";

const Map = ({ src, title, blurred = false }) => (
    <>
        <img src={src} alt={`Where is Waldo map: ${title}`} className={blurred ? 'blurred' : ''} />
    </>
)

export default Map;
import React, { useRef, useEffect } from "react";

const Timer = ({ elapsedTime, setElapsedTime }) => {
    const startTime = useRef(Date.now())

    useEffect(() => {
        setElapsedTime((Date.now() - startTime.current) / 1000);

        const interval = setInterval(() => {
            setElapsedTime((Date.now() - startTime.current) / 1000);
        }, 100)

        return () => clearInterval(interval);
    }, [])

    return (
        <>
            <div className="time">{elapsedTime.toFixed(2)}</div>
        </>
    )
}

export default Timer;
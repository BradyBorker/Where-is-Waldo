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
            {elapsedTime.toFixed(2)}
        </>
    )
}

export default Timer;
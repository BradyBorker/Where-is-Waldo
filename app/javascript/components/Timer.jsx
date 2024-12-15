import React, { useState, useEffect } from "react";

const Timer = ({ elapsedTime, setElapsedTime }) => {
    const [startTime, setStartTime] = useState(new Date());

    const time = new Date(0);
    time.setSeconds(elapsedTime / 1000);

    useEffect(() => {
        setStartTime(new Date());

        const interval = setInterval(() => {
            const now = new Date();
            setElapsedTime(now.getTime() - startTime.getTime());
        }, 1000)

        return () => clearInterval(interval);
    }, [])

    return (
        <>
            {time.toISOString().substring(11, 19)}
        </>
    )
}

export default Timer;
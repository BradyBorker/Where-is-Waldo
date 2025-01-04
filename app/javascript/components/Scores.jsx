import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

const Scores = () => {
    const location = useLocation();
    const [scores, setScores] = useState([]);

    const mapTitle = location.state.mapTitle;
    const elapstedTime = location.state.elapsedTime;
    const url = `/api/v1/maps/${mapTitle}/scores`

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => res)
    }, [scores])

    const submitScore = (e) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ submittedScore, name: e.target.name })
        })
            .then((res) => res.json())
            .then((res) => {
                if (res) setScores([...scores, submittedScore])
            })
    }

    return (
        <>
            <Header />
            <h1>{submittedScore}</h1>
        </>
    )
}

export default Scores;
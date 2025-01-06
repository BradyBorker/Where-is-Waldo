import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Scores = ({ mapTitle, elapsedTime }) => {
    const [scores, setScores] = useState([]);
    const [scoreSubmitted, setScoreSubmitted] = useState(false)
    const url = `/api/v1/maps/${mapTitle}/scores`

    const fetchScores = () => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => setScores(res))
    }

    useEffect(() => {
        fetchScores();
    }, [])

    const submitScore = (e) => {
        e.preventDefault();
        const nameInput = document.querySelector('#name')

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
            },
            body: JSON.stringify({ name: nameInput.value, time: elapsedTime })
        })
            .then((res) => res.json())
            .then((res) => {
                if (res) {
                    fetchScores();
                    setScoreSubmitted(true);
                }
            })
    }

    return (
        <>
            <div className="scores-container">
                <div className="submit-score">
                    <div className="player-time">
                        <h1>Your Time</h1>
                        <p>{elapsedTime.toFixed(2)} Seconds</p>
                    </div>
                    {!scoreSubmitted &&
                        <form onSubmit={submitScore}>
                            <label htmlFor="name">
                                <input type="text" id="name" required placeholder="Enter Name" />
                            </label>
                            <button type="submit">Submit</button>
                        </form>
                    }
                </div>
                <div className="map-scores-container">
                    <h1>Map Scores</h1>
                    <div className="scores">
                        {scores.length > 0 ?
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {scores.map((score) => (
                                        <tr key={score.id}>
                                            <td>{score.name}</td>
                                            <td>{score.time}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            :
                            <h3>No Scores Available!</h3>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Scores;
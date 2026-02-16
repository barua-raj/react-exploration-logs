import { useState } from 'react';
import './App.css'

export default function Runs() {
    
    const [runs, setRuns] = useState(0);

    const [singles, setSingles] = useState(0);

    const [twos, setTows] = useState(0);
    
    const [threes, setThrees] = useState(0);
    
    const [fours, setFours] = useState(0);

    const [sixes, setSixes] = useState(0);

    const handleSingles = () => {
        const updatedRuns = runs + 1;
        const updatedSingles = singles + 1;
        setSingles(updatedSingles);
        setRuns(updatedRuns);
    };

    const handleTwos = () => {
        const updatedRuns = runs + 2;
        const updatedTwos = twos + 1;
        setTows(updatedTwos);
        setRuns(updatedRuns);
    };
    
    const handleThrees = () => {
        const updatedRuns = runs + 3;
        const updatedThrees = threes + 1;
        setThrees(updatedThrees);
        setRuns(updatedRuns);
    };

    const handleFours = () => {
        const updatedRuns = runs + 4;
        const updatedFours = fours + 1;
        setFours(updatedFours);
        setRuns(updatedRuns);
    };

    const handleSixes = () => {
        const updatedRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
        setRuns(updatedRuns);
    };

    return(
        <div className="player-runs">
            <h3>Player Name: Liton Das</h3>
            <h5>Total Runs: {runs}</h5>
            {
                runs >= 50 && <p>🏏 Half-century for Liton Das 🏏</p>
            }
            {
                runs >=100 && <p>🏏 Century for Liton Das 🏏</p>
            }
            <h4>Runs Breakdown</h4>
            <p>Total Single's: {singles}</p>
            <p>Total Two's: {twos}</p>
            <p>Total Three's: {threes}</p>
            <p>Total Fours: {fours}</p>
            <p>Total Sixes: {sixes}</p>
            <div className="btn-runs">
                <button onClick={handleSingles}>Singles</button>
                <button onClick={handleTwos}>Two's</button>
                <button onClick={handleThrees}>Three's</button>
                <button onClick={handleFours}>Four's</button>
                <button onClick={handleSixes}>Six's</button>
            </div>
        </div>
    );
};
import { useState } from "react";

export default function Batsman() {
    
    const [runs, setRuns]= useState(0);

    const [sixes, setSixes]= useState(0);

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    };

    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    };

    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
        setRuns(updatedRuns);
    };

    return(
        <div>
            <h3>Player: Bangladeshi Batsman</h3>
            {
                runs >= 50 && <p>You Score: 50</p>
            }
            <h3>Score: {runs}</h3>
            <p>Total Sixes: {sixes}</p>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    );
};
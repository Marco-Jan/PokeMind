type ScoreBoardProps = {
    score: number;
    highScore: number;
}

export const Score = ({ score, highScore }: ScoreBoardProps) => {
    const highScoreValue = highScore > 0 ? highScore : 1; 
    const progress = Math.min((score / highScoreValue) * 100, 100); 

    return (
        <>
            <div className="scoreContainer">
                <div className="currentScore">
                    <h2>aktueller Score: {score}</h2>
                    {/* <h2>HighScore: {highScore}</h2> */}
                </div>
                <div className="progressBarContainer">
                    <div className="progressBar" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </>
    );
};

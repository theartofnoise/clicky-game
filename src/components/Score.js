import React from 'react';

// show th score and round
const Score = (props) => {
    return(
        <div>Score: {props.score} | High Score: {props.highScore} | Round: {props.round}</div>
        )
}

export default Score;
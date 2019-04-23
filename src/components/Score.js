import React from 'react';

const Score = (props) => {
    return(
        <div>Score: {props.score} | High Score: {props.highScore} | Round: {props.round}</div>
        )
}

export default Score;
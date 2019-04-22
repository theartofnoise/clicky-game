import React from 'react';

const Score = (props) => {
    console.log(props)
    return(
        <div>Score: {props.data}</div>
        )
}

export default Score;
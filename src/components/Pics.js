import React from 'react';
import "../css/Pics.css";

const Pics = (props) => {
    return(
      <div className="pics col s3">
        <a href="#"><img src={props.image} alt={props.name} /></a>
      </div>
      )
}

export default Pics;

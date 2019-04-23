import React from "react";
import "../css/Pics.css";

const Pics = props => {

  const localPicClick = (e) => {
    props.picClicked(e.target.id);
  }

  return <div onClick={localPicClick} className="pics col s12 m4 l3">
  <img src={props.src} alt={props.alt} id={props.id} />
</div>;
};

export default Pics;

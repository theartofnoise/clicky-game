import React from "react";
import "../css/Pics.css";

console.log("yo");
const Pics = props => {

  const localPicClick = (e) => {
    props.picClicked(e.target.id);
  }
  
  // renders out the div
  const renderList = () => {
    // randomly sorts the pictures first
    props.data.sort((a, b) => {
      return 0.5 - Math.random();
    });
    // displays all pics
    return props.data.map(pic => {
      return (
        <div onClick={localPicClick} className="pics col s12 m4 l3">
          <img src={pic.image} alt={pic.name} id={pic.id} />
        </div>
      );
    });
  };
  
  const holler = props => {
    console.log(props.target.id);  
  };

  return <div>{renderList()}</div>;
};

export default Pics;

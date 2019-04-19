import React from "react";
import "../css/Wrapper.css";

function Wrapper(props) {
  return <div className="wrapper row">{props.children}</div>;
}

export default Wrapper;
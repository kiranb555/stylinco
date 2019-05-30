import React from "react";
import "./card.css";
function Card(props) {
  return (
    <div className="card" style={{ backgroundColor: props.bgcolor }}>
      <h1>{props.heading}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;

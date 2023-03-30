import React from "react";
import { useState, useEffect } from "react";

const Card = (props) => {
  return <div className="Card">
    <h1>{props.city}</h1>
    <br></br>
    <p>{props.temp}</p>
    <p> {props.maxHigh} </p>
  </div>;
};

export default Card; 
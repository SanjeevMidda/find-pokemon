import React from "react";

const Card = ({ name, img = null, weight, height }) => {
  return (
    <div className="card">
      {img && <img src={img} alt="pokemon" />}
      <h1>NAME: {name}</h1>
      <h1>WEIGHT: {weight}</h1>
      <h1>HEIGHT: {height}</h1>
    </div>
  );
};

export default Card;

import React from "react";

function Card({ imgCard, nombre }) {
  return (
    <>
      <div className="section-card">
        <div className="section-card-img">
          <img src={imgCard} alt="" />
        </div>
        <div className="box-card">
          <h3>{nombre}</h3>
          <div className="linea-card"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
            nam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
            rerum.
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;

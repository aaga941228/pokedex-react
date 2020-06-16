import React from "react";

const Sprites = ({ sprites, name }) => {
  const spritesList = sprites =>  sprites.map((sprite, index) => (
      <img
      className="img-fluid col pixelated"
      src={sprite}
      alt={name}
      key={index}
    />
  ))

  return (
    <div className="card bg-transparent">
      <div className="card-body">
        <div className="row d-flex">
          {
            !!sprites && spritesList([sprites.back_default, sprites.back_shiny])
          }
        </div>
        <div className="row d-flex">
          {
            !!sprites && spritesList([sprites.front_default, sprites.front_shiny])
          }
        </div>
      </div>
    </div>
  );
};

export default Sprites;

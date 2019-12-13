import React from "react";

const Sprites = props => {
  const { sprites } = props;

  return (
    <div className="card bg-transparent">
      <div className="card-body">
        <div className="row d-flex">
          <img
            className="img-fluid col pixelated"
            src={!!sprites ? `${sprites.back_default}` : ""}
            alt=""
          />
          <img
            className="img-fluid col pixelated"
            src={!!sprites ? `${sprites.back_shiny}` : ""}
            alt=""
          />
        </div>
        <div className="row d-flex">
          <img
            className="img-fluid col pixelated"
            src={!!sprites ? `${sprites.front_default}` : ""}
            alt=""
          />
          <img
            className="img-fluid col pixelated"
            src={!!sprites ? `${sprites.front_shiny}` : ""}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sprites;

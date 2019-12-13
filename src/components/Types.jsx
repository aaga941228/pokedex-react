import React from "react";

const Types = props => {
  const { types } = props.pokemon;
  let typesList;

  !!types &&
    (typesList = types.map((type, index) => (
      <div
        key={index}
        className={`btn btn-outline badge badge-pill d-inline m-1 uppercase ${type.type.name}`}
      >
        {type.type.name}
      </div>
    )));

  return (
    <div className="card my-1 bg-transparent">
      <div className="card-body">
        <p className="fs-1-25">Types: </p>
        <div className="d-flex flex-wrap fs-1-25">{!!types && typesList}</div>
      </div>
    </div>
  );
};

export default Types;

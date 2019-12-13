import React from "react";

const FilterByType = props => {
  const { types } = props;

  const typesList = types.map((type, index) => (
    <button
      className={`btn badge badge-pill d-inline pointer uppercase m-1 fs-lg-1-25 ${type.name}`}
      onClick={props.filter}
      id={type.name}
      key={index}
    >
      {type.name}
    </button>
  ));

  return (
    <div className="col">
      <div className="d-flex justify-content-around flex-wrap">{typesList}</div>
    </div>
  );
};

export default FilterByType;

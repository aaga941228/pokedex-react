import React from "react";

const FilterByType = props => {
  const { types } = props;

  const typesList = types.map((type, index) => (
    <button
      className={`btn btn-outline badge badge-pill d-inline fs-1-25 ${type.name}`}
      onClick={props.filter}
      id={type.name}
      key={index}
    >
      {type.name}
    </button>
  ));

  return <div className="col">{typesList}</div>;
};

export default FilterByType;

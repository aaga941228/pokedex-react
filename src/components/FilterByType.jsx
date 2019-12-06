import React from "react";

const FilterByType = props => {
  const { types } = props;

  const typesList = types.map((type, index) => (
    <button
      key={index}
      className={`btn btn-outline badge badge-pill d-inline ${type.name}`}
      onClick={props.filter}
      data-name={type.name}
    >
      {type.name}
    </button>
  ));

  return <div className="col">{typesList}</div>;
};

export default FilterByType;

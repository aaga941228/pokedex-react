import React from "react";

const FilterByType = props => {
  const { types } = props;

  const typesList = types.map((type, index) => (
    <h3 className="d-inline-block" key={index}>
      <button
        className={`btn btn-outline badge badge-pill d-inline ${type.name}`}
        onClick={props.filter}
        id={type.name}
      >
        {type.name}
      </button>
    </h3>
  ));

  return <div className="col">{typesList}</div>;
};

export default FilterByType;

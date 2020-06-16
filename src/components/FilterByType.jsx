import React from "react";

const FilterByType = ({ types, ...othersProps }) => (
  <div className="col">
    <div className="d-flex justify-content-around flex-wrap">
      {types.map((type, index) => (
        <button
          className={`badge badge-pill d-inline pointer uppercase m-1 fs-lg-1-25 ${type.name}`}
          onClick={othersProps.filter}
          id={type.name}
          key={index}
        >
          {type.name}
        </button>
      ))}
    </div>
  </div>
)

export default FilterByType;

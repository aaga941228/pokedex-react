import React from "react";

const FilterByName = props => {
  return (
    <div className="row my-4 mx-auto input-group d-flex flex-column">
      <label htmlFor="name">
        <p>Search by name</p>
        <input
          className="form-control w-100"
          type="search"
          onChange={props.handleChangeInputName}
        />
      </label>
    </div>
  );
};

export default FilterByName;

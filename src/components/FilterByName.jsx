import React from "react";

const FilterByName = props => {
  return (
    <div className="row my-4">
      <div className="col-12 mx-auto input-group d-flex flex-column">
        <label htmlFor="name">
          <h4>Search by name</h4>
        </label>
        <input
          className="form-control w-100"
          name="name"
          type="search"
          onChange={props.handleChangeInputName}
        />
      </div>
    </div>
  );
};

export default FilterByName;

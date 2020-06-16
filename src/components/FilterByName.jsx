import React from "react";

const FilterByName = ({ handleChangeInputName }) => (
  <div className="my-4 mx-auto input-group d-flex flex-column">
    <label htmlFor="name">
      <p className="fs-1-25">Search by name</p>
      <input
        className="form-control w-100"
        type="search"
        onChange={handleChangeInputName}
      />
    </label>
  </div>
)

export default FilterByName;

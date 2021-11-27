import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <section className="filter-checkbox">
      <label className="checkbox">
        Короткометражки  
        <input
          type="checkbox"
          className="checkbox__input"
        />
        <span className="checkbox__filter"></span>
      </label>
    </section>
  );
}

export default FilterCheckbox;
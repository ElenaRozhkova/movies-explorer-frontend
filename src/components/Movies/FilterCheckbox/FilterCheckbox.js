import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <section className="filter-checkbox">
      <label className="checkbox">
        <input
          type="checkbox"
          className="checkbox__input"
        />
        <span className="checkbox__filter"></span>
        <label className="checkbox__label"> Короткометражки</label>
      </label>
    </section>
  );
}

export default FilterCheckbox;
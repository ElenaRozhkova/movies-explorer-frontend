import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ handleChecked, moviesChecked }) {

  return (
    <section className="filter-checkbox">
      <label className="checkbox">
        <input
          type="checkbox"
          className="checkbox__input" onClick={handleChecked} checked={moviesChecked} 
        />
        <span className="checkbox__filter"></span>
        <label className="checkbox__label"> Короткометражки</label>
      </label>
    </section>
  );
}

export default FilterCheckbox;
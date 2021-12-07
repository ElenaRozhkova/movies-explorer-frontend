import React, {useRef} from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ handleChecked }) {
  const checked = useRef();

  const handleClick=()=>{
    handleChecked(checked.current.checked);
  }
  return (
    <section className="filter-checkbox">
      <label className="checkbox">
        <input
          type="checkbox"
          className="checkbox__input" onClick={handleClick} ref={checked}
        />
        <span className="checkbox__filter"></span>
        <label className="checkbox__label"> Короткометражки</label>
      </label>
    </section>
  );
}

export default FilterCheckbox;
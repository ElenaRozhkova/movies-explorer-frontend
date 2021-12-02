import React from 'react';
import './SearchForm.css';
import FilterCheckbox from './../FilterCheckbox/FilterCheckbox';

function SearchForm({ handleChange, value, handleClick }) {
    return (
      <section className="search-container">
        <form className="search">
          <input type="text" className="search__input" placeholder="Фильм" required 
              onChange={(event) => handleChange(event.target.value)}
              value={value}/>
          <button className="search__input-img" onClick={handleClick}>Найти</button>
        </form> 
        <FilterCheckbox />
      </section>
    )
}
export default SearchForm;
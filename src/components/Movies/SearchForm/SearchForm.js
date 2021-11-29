import React from 'react';
import './SearchForm.css';
import FilterCheckbox from './../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
      <section className="search-container">
        <form className="search">
          <input type="text" className="search__input" placeholder="Фильм" required />
          <button className="search__input-img"></button>
        </form> 
        <FilterCheckbox />
      </section>
    )
}
export default SearchForm;
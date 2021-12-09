import React, {useState}  from 'react';
import './SearchForm.css';
import FilterCheckbox from './../FilterCheckbox/FilterCheckbox';

function SearchForm({ handleChange, value, handleClick, handleChecked, moviesChecked}) {
  const [valid, setValid] = useState(false);

  const handleSearchClick =(event)=>{
    if (value!=='') {setValid(false)} else {setValid(true)}
    handleClick(event);
  }
  const handleInputChange =(event)=>{
    setValid(false);
    handleChange(event.target.value)
  }

    return (
      <section className="search-container">
        <form className="search">
          <input type="text" className="search__input" placeholder="Film" required 
              onChange={handleInputChange}
              value={value}/>
          <button className="search__input-img" onClick={handleSearchClick}>Search</button>
        </form> 
        {valid ?  <div className="search__error">Enter something for searching</div> :""}
        <FilterCheckbox handleChecked={handleChecked} moviesChecked={moviesChecked}/>
      </section>
    )
}
export default SearchForm;
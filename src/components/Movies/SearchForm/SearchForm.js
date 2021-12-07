import React, {useState}  from 'react';
import './SearchForm.css';
import FilterCheckbox from './../FilterCheckbox/FilterCheckbox';

function SearchForm({ handleChange, value, handleClick, handleChecked }) {
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
          <input type="text" className="search__input" placeholder="Фильм" required 
              onChange={handleInputChange}
              value={value}/>
          <button className="search__input-img" onClick={handleSearchClick}>Найти</button>
        </form> 
        {valid ?  <div className="search__error">Нужно ввести ключевое слово</div> :""}
        <FilterCheckbox handleChecked={handleChecked}/>
      </section>
    )
}
export default SearchForm;
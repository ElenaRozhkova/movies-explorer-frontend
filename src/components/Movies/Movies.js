import React, { useState } from "react";
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from './../Navigation/Navigation';
import Preloader from '../Preloader/Preloader';

function Movies() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  
  const setOnForm=(value)=>{
    setOpenForm(value);
  }
  return (
    <div className={`movies ${openForm ? "movies_type_dark":""}`} >
     <Navigation setOnForm={ setOnForm }/>             
     <SearchForm />
     {isSubmitting ? <Preloader /> : <MoviesCardList />}
    </div>
  );
}

export default Movies;
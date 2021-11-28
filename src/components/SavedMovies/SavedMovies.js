import React, { useState } from "react";
import './SavedMovies.css';
import Header from './../Header/Header';
import SearchForm from './../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from './../Navigation/Navigation';


function SavedMovies( ) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  
  const setOnForm=(value)=>{
    setOpenForm(value);
  }

  return (
    <div className={`movies ${openForm ? "movies_type_dark":""}`} >
        <Header>
            <Navigation setOnForm={ setOnForm } />               
        </Header>
        <SearchForm />
        <MoviesCardList />
    </div>
  );
}

export default SavedMovies;
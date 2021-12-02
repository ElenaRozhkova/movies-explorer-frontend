import React, { useState } from "react";
import './SavedMovies.css';
import SearchForm from './../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from './../Navigation/Navigation';
import Preloader from '../Preloader/Preloader';


function SavedMovies({setSearchQuery, searchQuery, handleSubmit, isSubmitting, cards, notMovies } ) {
  const [openForm, setOpenForm] = useState(false);
  const [deleteMovies, setDeleteMovies] = useState(false);
  
  const setOnForm=(value)=>{
    setOpenForm(value);
  }

  return (
    <div className={`movies ${openForm ? "movies_type_dark":""}`} >
        <Navigation setOnForm={ setOnForm } />               
        <SearchForm />
        {isSubmitting ? <Preloader /> : <MoviesCardList cards={cards} deleteMovies={deleteMovies} notMovies={notMovies}/>}
    </div>
  );
}

export default SavedMovies;
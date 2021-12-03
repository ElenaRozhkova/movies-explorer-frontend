import React, { useState } from "react";
import './SavedMovies.css';
import SearchForm from './../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from './../Navigation/Navigation';
import Preloader from '../Preloader/Preloader';


function SavedMovies({setSearchQuery, searchQuery, handleSubmit, isSubmitting, cards, notMovies, onCardDelete, savedCardsId } ) {
  const [openForm, setOpenForm] = useState(false);
  const [deleteMovies, setDeleteMovies] = useState(true);
  const setOnForm=(value)=>{
    setOpenForm(value);
  }

  return (
    <div className={`movies ${openForm ? "movies_type_dark":""}`} >
        <Navigation setOnForm={ setOnForm } />               
        <SearchForm handleChange={setSearchQuery} value={searchQuery} handleClick={handleSubmit}/>
        {isSubmitting ? <Preloader /> : <MoviesCardList cards={cards} deleteMovies={deleteMovies} notMovies={notMovies} onCardDelete={onCardDelete} savedCardsId={savedCardsId}/>}
    </div>
  );
}

export default SavedMovies;
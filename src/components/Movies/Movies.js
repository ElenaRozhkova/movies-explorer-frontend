import React, { useState } from "react";
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from './../Navigation/Navigation';
import Preloader from '../Preloader/Preloader';

function Movies( {setSearchQuery, searchQuery, handleSubmit, isSubmitting, cards, notMovies, onCardLike, savedCardsId, onCardDelete} ) {
  const [openForm, setOpenForm] = useState(false);
  const [deleteMovies, setDeleteMovies] = useState(false);
  
  const setOnForm=(value)=>{
    setOpenForm(value);
  }


  return (
    <div className={`movies ${openForm ? "movies_type_dark":""}`} >
     <Navigation setOnForm={ setOnForm }/>             
     <SearchForm handleChange={setSearchQuery} value={searchQuery} handleClick={handleSubmit}/>
     {isSubmitting ? <Preloader /> : <MoviesCardList cards={cards} deleteMovies={deleteMovies} notMovies={notMovies} onCardLike={onCardLike} savedCardsId={savedCardsId} onCardDelete={onCardDelete} />}
    </div>
  );
}

export default Movies;
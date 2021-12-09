import React, { useState, useEffect } from "react";
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from './../Navigation/Navigation';
import Preloader from '../Preloader/Preloader';

function Movies( {setSearchQuery, searchQuery, 
                  handleSubmit, isSubmitting, cards, saveCards, notMovies, 
                  onCardLike, savedCardsId, onCardDelete, handleChecked, moviesChecked} ) {
  const [openForm, setOpenForm] = useState(false);
  let deleteMovies=false;

  const setOnForm=(value)=>{
    setOpenForm(value);
  }


  return (
    <div className={`movies ${openForm ? "movies_type_dark":""}`} >
     <Navigation setOnForm={ setOnForm }/>             
     <SearchForm handleChange={setSearchQuery} value={searchQuery} 
                 handleClick={handleSubmit} handleChecked={handleChecked} moviesChecked={moviesChecked}/>
     {isSubmitting ? <Preloader /> : 
     <MoviesCardList cards={cards} saveCards={saveCards} 
        deleteMovies={deleteMovies} notMovies={notMovies} 
        onCardLike={onCardLike} savedCardsId={savedCardsId} 
        onCardDelete={onCardDelete} />}
    </div>
  );
}

export default Movies;
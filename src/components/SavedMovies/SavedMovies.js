import React from "react";
import './SavedMovies.css';
import Header from './../Header/Header';
import SearchForm from './../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from './../Navigation/Navigation';


function SavedMovies() {

  return (
    <div className="movies">
        <Header>
            <Navigation />               
        </Header>
        <SearchForm />
        <MoviesCardList />
    </div>
  );
}

export default SavedMovies;
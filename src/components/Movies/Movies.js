import React, { useState } from "react";
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from './../Header/Header';
import Navigation from './../Navigation/Navigation';
import Preloader from './Preloader/Preloader';

function Movies() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="movies">
     <Header>
         <Navigation />             
     </Header>
     <SearchForm />
     {isSubmitting ? <Preloader /> : <MoviesCardList />}
    </div>
  );
}

export default Movies;
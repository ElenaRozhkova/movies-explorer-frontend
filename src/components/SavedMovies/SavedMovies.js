import React, { useState } from "react";
import './SavedMovies.css';
import SearchForm from './../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from './../Navigation/Navigation';
import Preloader from '../Preloader/Preloader';


function SavedMovies({setSearchQuery, searchQuery, isSubmitting, cards,  onCardDelete, savedCardsId } ) {
  const [openForm, setOpenForm] = useState(false);
  const [deleteMovies, setDeleteMovies] = useState(true);
  const [notMovies, setNotMovies] = useState('');
  const [saveMovies, setSaveMovies] = useState(cards);

  const setOnForm=(value)=>{
    setOpenForm(value);
  }

  React.useEffect(() => {
    setSaveMovies(cards);
  },[cards]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    setSaveMovies(cards.filter(v => v.nameRU.includes(searchQuery) && searchQuery!==""));
    if (saveMovies.length === 0) {setNotMovies('Ничего не найдено'); console.log("notcards")} 
    else{
      localStorage.setItem('savemovies', JSON.stringify(saveMovies));
    }
  }

  return (
    <div className={`movies ${openForm ? "movies_type_dark":""}`} >
        <Navigation setOnForm={ setOnForm } />               
        <SearchForm handleChange={setSearchQuery} value={searchQuery} handleClick={handleSubmit}/>
        {isSubmitting ? <Preloader /> : <MoviesCardList cards={saveMovies} deleteMovies={deleteMovies} notMovies={notMovies} onCardDelete={onCardDelete} savedCardsId={savedCardsId}/>}
    </div>
  );
}

export default SavedMovies;
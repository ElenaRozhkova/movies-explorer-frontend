import React, { useState } from "react";
import './SavedMovies.css';
import SearchForm from './../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from './../Navigation/Navigation';
import Preloader from '../Preloader/Preloader';


function SavedMovies({ cards,  onCardDelete, savedCardsId, handleChecked, moviesChecked} ) {
  const [openForm, setOpenForm] = useState(false);
  const [notMovies, setNotMovies] = useState('');
  const [saveMovies, setSaveMovies] = useState(cards);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  let deleteMovies=true;
  const setOnForm=(value)=>{
    setOpenForm(value);
  }

  React.useEffect(() => {
    setSaveMovies(cards);
  }, [cards])

  React.useEffect(() => {
    if (isSubmitting) {
      const key = new RegExp(searchQuery, "gi");
      const saveCard = cards.filter(v => key.test(v.nameRU) || key.test(v.nameEN));
      setNotMovies('');
      setSaveMovies(saveCard);
      if (saveCard.length === 0) {
        setNotMovies('Nothing saved');
        setIsSubmitting(false);
      } 
      else{
        localStorage.setItem('savemovies', JSON.stringify(saveMovies));
      }
      setIsSubmitting(false);
    }
  }, [isSubmitting, searchQuery])

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
  }


   return (
    <div className={`movies ${openForm ? "movies_type_dark":""}`} >
        <Navigation setOnForm={ setOnForm } />               
        <SearchForm handleChange={setSearchQuery} 
                    value={searchQuery} handleClick={handleSubmit} 
                    handleChecked={handleChecked} moviesChecked={moviesChecked}/>
        {isSubmitting ? <Preloader /> : 
        <MoviesCardList 
          cards={saveMovies} 
          deleteMovies={deleteMovies} 
          notMovies={notMovies} 
          onCardDelete={onCardDelete} 
          savedCardsId={savedCardsId}/>}
    </div>
  );
}

export default SavedMovies;
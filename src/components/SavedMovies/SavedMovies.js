import React, { useState } from "react";
import './SavedMovies.css';
import SearchForm from './../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from './../Navigation/Navigation';
import Preloader from '../Preloader/Preloader';


function SavedMovies({/*setSearchQuery, searchQuery, isSubmitting,*/ cards,  onCardDelete, savedCardsId } ) {
  const [openForm, setOpenForm] = useState(false);
  const [deleteMovies, setDeleteMovies] = useState(true);
  const [notMovies, setNotMovies] = useState('');
  const [saveMovies, setSaveMovies] = useState(cards);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setOnForm=(value)=>{
    setOpenForm(value);
  }

  React.useEffect(() => {
    setSaveMovies(cards);
  }, [cards])

  console.log(cards);
  console.log(onCardDelete);
  React.useEffect(() => {
    if (isSubmitting) {
      const saveCard = cards.filter(v => v.nameRU.includes(searchQuery) && searchQuery!=="")
      setNotMovies('');
      setSaveMovies(saveCard);
      if (saveCard.length === 0) {
        console.log('Ничего не найдено');
        setNotMovies('Ничего не найдено');
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
        <SearchForm handleChange={setSearchQuery} value={searchQuery} handleClick={handleSubmit}/>
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
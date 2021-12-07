import React, { useState } from "react";
import './SavedMovies.css';
import SearchForm from './../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from './../Navigation/Navigation';
import Preloader from '../Preloader/Preloader';


function SavedMovies({ cards,  onCardDelete, savedCardsId, handleChecked} ) {
  const [openForm, setOpenForm] = useState(false);
  const [notMovies, setNotMovies] = useState('');
  const [saveMovies, setSaveMovies] = useState(cards);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveMoviesChecked, setSaveMoviesChecked] = useState(false);
  
  let deleteMovies=true;
  const setOnForm=(value)=>{
    setOpenForm(value);
  }

  React.useEffect(() => {
    setSaveMovies(cards);
  }, [cards])

  React.useEffect(() => {
    if (searchQuery===""){
    if(saveMoviesChecked){
      const filtermovies = cards.filter(v => v.duration<=40);
      setSaveMovies(filtermovies);
     }
     else { 
      setSaveMovies(cards);}}
}, [saveMoviesChecked])

  React.useEffect(() => {
    if (isSubmitting) {

      const saveCard = cards.filter(v => v.nameRU.includes(searchQuery) && searchQuery!=="")
      setNotMovies('');
      console.log(saveCard);
      if(saveMoviesChecked){
        const filtermovies = saveCard.filter(v => v.duration<=40);
        setSaveMovies(filtermovies);
        if (filtermovies.length === 0) {
          setNotMovies('Ничего не найдено');
          setIsSubmitting(false);
         } 
       }
       else { 
        setSaveMovies(saveCard);}
       if (saveCard.length === 0) {
        setNotMovies('Ничего не найдено');
        setIsSubmitting(false);
       } 
       else{
        localStorage.setItem('savemovies', JSON.stringify(saveMovies));
       }
      setIsSubmitting(false);
    }
  }, [isSubmitting, searchQuery, saveMoviesChecked])


  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
  }

  const handleSaveChecked=(param)=>{
    setSaveMoviesChecked(param);
  }
   return (
    <div className={`movies ${openForm ? "movies_type_dark":""}`} >
        <Navigation setOnForm={ setOnForm } />               
        <SearchForm handleChange={setSearchQuery} value={searchQuery} handleClick={handleSubmit} handleChecked={handleSaveChecked}/>
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
import React, {useState, useEffect} from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard"

function MoviesCardList({cards, deleteMovies, notMovies, onCardLike, onCardDelete, savedCardsId}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [countMoreCards, setCountMoreCards] = useState(window.innerWidth);
  const [currentCards, setCurrentCards] = useState([]);

  const location = window.location.pathname;
  let timeout = null;
  const changeWindowsWidth=()=>{
    if (timeout) {clearTimeout(timeout);}
    timeout = setTimeout(() => 
    setWindowWidth(window.innerWidth), 1290);
  };

  useEffect(() => {
    window.addEventListener('resize', changeWindowsWidth);
    return () => 
      window.removeEventListener('resize', changeWindowsWidth);
  });

  const addCards=()=>{
    const moreCards=cards.slice(currentCards.length, currentCards.length+countMoreCards);
    setCurrentCards([...currentCards, ...moreCards]);
  }

  useEffect(() => {
    if ((location === '/movies')||(location === '/saved-movies')) {
      if (windowWidth <= 480) {
        setCurrentCards(cards.slice(0, 5));
        setCountMoreCards(2);
      } else if (windowWidth <= 768) {
        setCurrentCards(cards.slice(0, 8));
        setCountMoreCards(2);
      } else {
        setCurrentCards(cards.slice(0, 12));
        setCountMoreCards(4);
      }
    } 
  }, [windowWidth,cards,location]);

    return (
        <>
      {notMovies ? <div className="movieserror">{notMovies}</div> : 
       <div className="movieslist">
        <div className="movieslist-container">
              { currentCards.map((card, i) => (
                    <MoviesCard  key={i} card={card} deleteMovies={deleteMovies} onCardLike={onCardLike} onCardDelete={onCardDelete} savedCardsId={savedCardsId}/>
                ))}
        </div>
      {currentCards.length<cards.length ? 
        <div className="movieslist__more">
          <button className="movieslist__button" onClick={addCards}>Ещё</button>
        </div> 
        : ''}     
      </div> }
  
      </>
    )
}
export default MoviesCardList;
import React from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard"

function MoviesCardList({cards, deleteMovies, notMovies}) {
    return (
        <>
      {notMovies ? <div className="movieserror">{notMovies}</div> : 
       <div className="movieslist">
        <div className="movieslist-container">
              {cards.map((card, i) => (
                    <MoviesCard  key={i} card={card} deleteMovies={deleteMovies} />
                ))}
        </div>
        <div className="movieslist__more">
          <button className="movieslist__button">Ещё</button>
        </div>      
      </div> }
  
      </>
    )
}
export default MoviesCardList;
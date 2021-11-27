import React from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard"
import { movies } from '../../utils/constants';


function MoviesCardList() {
    return (
        <>
      <div className="movieslist">
        <div className="movieslist-container">
              {movies.map((card, i) => (
                    <MoviesCard  key={i} card={card} />
                ))}
        </div>
        <div className="movieslist__more">
          <button className="movieslist__button">Ещё</button>
        </div>      
      </div>   
      </>
    )
}
export default MoviesCardList;
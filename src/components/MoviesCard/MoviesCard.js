import React from 'react';
import './MoviesCard.css';

function MoviesCard({card, deleteMovies}) {
    return (       
        <article className="card" id={card._id}>
            <div className="card__size">
                <img className="card__image" src={card.image} alt={card.nameRU} />
                <div className="card__title-container">
                    <h2 className="card__title">{card.nameRU}</h2>
                    <button type="button" className={` ${deleteMovies ? "card__vector-like":"card__vector-delete"}`}></button>
                </div>
            </div>
            <div className="card__duration" > {card.duration}</div>
         </article>
    )
}
export default MoviesCard;
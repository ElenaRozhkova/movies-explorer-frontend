import React from 'react';
import './MoviesCard.css';

function MoviesCard({card}) {
    const cardLikeButtonClassName = `card__vector-like`;
    return (
        <article className="card" id={card._id}>
            <div className="card__size">
                <img className="card__image" src={`https://api.nomoreparties.co${card.image.url}`} alt={card.nameRU} />
                <div className="card__title-container">
                    <h2 className="card__title">{card.nameRU}</h2>
                    <div className="card__like-group">
                        <button type="button" className={cardLikeButtonClassName}></button>
                    </div>
                </div>
            </div>
            <div className="card__duration" > {card.duration}</div>
         </article>
    )
}
export default MoviesCard;
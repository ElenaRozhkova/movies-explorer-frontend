import React from 'react';
import './MoviesCard.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCard({card, deleteMovies, onCardLike}) {
    const [isLiked, setIsLiked]=React.useState('false');
    const [isLikedColor, setIsLikedColor]=React.useState("card__vector-like");
    const currentUser = React.useContext(CurrentUserContext);

    function handleLikeClick() {
        setIsLiked(!isLiked);
        if (isLiked) {setIsLikedColor("card__vector-like card__vector-liked");} 
        else {setIsLikedColor("card__vector-like");}
        onCardLike(card);
      }

    return (       
        <article className="card" id={card._id}>
            <div className="card__size">
                <img className="card__image" src={card.image} alt={card.nameRU} />
                <div className="card__title-container">
                    <h2 className="card__title">{card.nameRU}</h2>
                    <button type="button" onClick={handleLikeClick} className={` ${deleteMovies ? isLikedColor :"card__vector-delete"}`}></button>
                </div>
            </div>
            <div className="card__duration" > {card.duration}</div>
         </article>
    )
}
export default MoviesCard;
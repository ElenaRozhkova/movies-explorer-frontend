import React, { useEffect } from 'react';
import './MoviesCard.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCard({card, deleteMovies, onCardLike, onCardDelete, savedCardsId}) {
    const [isSaved, setIsSaved]=React.useState('false');
    const [isLikedColor, setIsLikedColor]=React.useState("card__vector-like");
    const currentUser = React.useContext(CurrentUserContext);

    useEffect(()=>{
        if ((savedCardsId)&&(savedCardsId.includes(card.movieId))) 
            {setIsSaved(true);
            setIsLikedColor("card__vector-like card__vector-liked");  
            console.log("hallo");}
        else {setIsSaved(false);
            setIsLikedColor("card__vector-like");
        }
    }, [card,savedCardsId])
   

    function handleSaveClick() {
        if (isSaved) {
            onCardDelete(card); 
            console.log("delete");
            setIsLikedColor("card__vector-like");
        } else {onCardLike(card); 
            console.log("create");
            setIsLikedColor("card__vector-like card__vector-liked");
        };
      }

    const handleDeleteClick =()=>{
        onCardDelete(card);
    }  

    return (       
        <article className="card" id={card._id}>
            <div className="card__size">
                <img className="card__image" src={card.image} alt={card.nameRU} />
                <div className="card__title-container">
                    <h2 className="card__title">{card.nameRU}</h2>
                    {deleteMovies ? 
                    <button type="button" onClick={handleDeleteClick} className="card__vector-delete"></button>
                    : <button type="button" onClick={handleSaveClick} className={isLikedColor}></button>
                    }
                    </div>
            </div>
            <div className="card__duration" > {card.duration}</div>
         </article>
    )
}
export default MoviesCard;
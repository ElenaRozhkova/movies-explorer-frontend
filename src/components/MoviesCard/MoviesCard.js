import React, { useEffect } from 'react';
import './MoviesCard.css';

function MoviesCard({card, deleteMovies, onCardLike, onCardDelete, savedCardsId}) {
    const [isSaved, setIsSaved]=React.useState('false');
    const [isLikedColor, setIsLikedColor]=React.useState("card__vector-like");
    const hours = Math.floor(card.duration / 60);  
    const minutes = card.duration % 60;
    const duration = hours ? `${hours} St ${minutes} min`: `${minutes} min`;
     useEffect(()=>{
        if ((savedCardsId)&&(savedCardsId.includes(card.movieId))) 
            {setIsSaved(true);
            setIsLikedColor("card__vector-like card__vector-liked"); 
            }
        else {setIsSaved(false);
            setIsLikedColor("card__vector-like");
        }
    }, [card,savedCardsId])

    function handleSaveClick() {
        if (isSaved) {
            onCardDelete(card); 
            setIsLikedColor("");
            setIsLikedColor("card__vector-like");
            setIsSaved(!isSaved);
        } else {onCardLike(card); 
            setIsLikedColor("card__vector-like card__vector-liked");
            setIsSaved(!isSaved);
        };
      }

    const handleDeleteClick =()=>{
        onCardDelete(card);
    } 
    
    const handleClick = () => {
        window.open(card.trailer);
      };

    return (       
        <article className="card" id={card._id}>
            <div className="card__size">
                <img className="card__image" src={card.image} alt={card.nameRU} onClick={handleClick} />
                <div className="card__title-container">
                    <h2 className="card__title">{card.nameRU}</h2>
                    {deleteMovies ? 
                    <button type="button" onClick={handleDeleteClick} className="card__vector-delete"></button>
                    : <button type="button" onClick={handleSaveClick} className={isLikedColor}></button>
                    }
                    </div>
            </div>
            <div className="card__duration" > {duration}</div>
         </article>
    )
}
export default MoviesCard;
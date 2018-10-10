import React from 'react';

import LikeDislike from '../LikeDislike/LikeDislike';

import './MovieCard.css';

const MovieCard = ({movie,deleteCard}) => {

    return (

        <div className="movieCard">

            <h2>{movie.title}</h2>
            <h4>{movie.category}</h4>

            <LikeDislike
            id={movie.id}
            likes={movie.likes}
            dislikes={movie.dislikes}
            />

            <button
            onClick={() => deleteCard(movie.id, movie.category)}
            className="deleteButton"
            >Delete</button>
            
        </div>

    )
}

export default MovieCard;
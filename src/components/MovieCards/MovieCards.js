import React, { Component } from 'react';

import movies from '../../components/DataMovies/DataMovies';

import MovieCard from '../MovieCard/MovieCard';

import './MovieCards.css';

class MovieCards extends Component {

    constructor(props){
        super(props)
        this.state = {
            movieList : movies
        }
    }

/*****************************Action to delete the card*******************************/
 
    deleteCard = (id, category) => {
        console.log(id, category)
        const movieList = this.state.movieList.filter(movie => {
            return movie.id !== id
        }) 
        this.setState({
        movieList
        })
    }
    
/*************************************************************************************/

    render () {

        return (

            <div className="MovieCardContainer">

                {
                this.state.movieList.map((movie) =>
                    this.props.categoryFilter === 'AllCategories' || movie.category === this.props.categoryFilter ?
                        <MovieCard
                        movie={movie}
                        key={movie.id}
                        deleteCard={(id, category) => this.deleteCard(id, category)}
                        />
                        : null
                )}

            </div>
        )
    }
}

export default MovieCards;
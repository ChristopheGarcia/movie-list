import React, { Component } from 'react';
import './App.css';

import movies from '../../components/DataMovies/DataMovies';

import Header from '../../components/Header/Header';
import MovieCards from '../../components/MovieCards/MovieCards';
import FilterCategory from '../../components/FilterCategory/FilterCategory';

class App extends Component {

  state = {
    categoryMovies : movies
  }

  selectCategory = (e) => {
    console.log(e)
    this.setState({
      category : e
    })
  }

 
  render() {

    return (

      <div className="App">

        <Header />

        <FilterCategory selectCategory={this.selectCategory} categories={this.state.categoryMovies} />

        <MovieCards categoryFilter={this.state.category} />
        
      </div>
    );
  }
}

export default App;

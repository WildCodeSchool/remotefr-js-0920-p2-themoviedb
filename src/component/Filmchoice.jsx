import React from 'react';
import './Filmchoice.css';
import axios from 'axios';
import apiKey from './apiKey';

class Filmchoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', results: [] };
    this.movieSearch = this.movieSearch.bind(this);
  }
  /** deuxième clès resolve ou movie
   * intialiser avec un tableau vide
   * enturer formulaire ave div  et map sur le tableau dans le state
   */

  fetchMovie = (event) => {
    event.preventDefault();
    const { value } = this.state;
    const url = `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${apiKey}`;
    axios.get(url).then((response) => {
      this.setState({ results: response.data.results });
    });
  };

  movieSearch(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value, results } = this.state;

    return (
      <div className="selection">
        <form className="searchbar" onSubmit={this.fetchMovie}>
          <input
            className="bar"
            type="text"
            placeholder="Je sais ce que je veux !"
            value={value}
            onChange={this.movieSearch}
          />
        </form>
        <cover className="view">
          {results.map((resultat) => (
            <result className="resultat">
              <img
                alt="filmcover"
                className="mini"
                src={`https://image.tmdb.org/t/p/w440_and_h660_face${resultat.poster_path}`}
              />
              <h3 className="titre">{resultat.original_title}</h3>
            </result>
          ))}
        </cover>
      </div>
    );
  }
}
export default Filmchoice;

import React from 'react';
import './Filmchoice.css';
import axios from 'axios';
import apiKey from './apiKey';

class Filmchoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', results: [], like: [], clicked: 'view' };
    this.movieSearch = this.movieSearch.bind(this);
  }
  /** deuxième clès resolve ou elect
   * intialiser avec un tableau vide
   * enturer formulaire ave div  et map sur le tableau dans le state
   */

  fetchMovie = (event) => {
    event.preventDefault();
    this.setState({ clicked: 'view' });
    const { value } = this.state;
    const url = `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${apiKey}`;
    axios.get(url).then((response) => {
      this.setState({ results: response.data.results });
    });
  };

  movieSelect = (resultat) => {
    this.setState((prevState) => {
      const newlike = prevState.like.includes(resultat)
        ? prevState.like.filter((mov) => mov !== resultat)
        : [...prevState.like, resultat];
      this.setState({ clicked: 'hide' });
      return { like: newlike };
    });
  };

  movieSearch(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value, results, like, clicked } = this.state;
    return (
      <div className="research">
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
          <div className={clicked}>
            {results.map((resultat) => (
              <div className="resultat">
                <button
                  className="bouton"
                  type="button"
                  onClick={() => this.movieSelect(resultat)}
                >
                  <img
                    alt="filmcover"
                    className="mini"
                    src={`https://image.tmdb.org/t/p/w440_and_h660_face${resultat.poster_path}`}
                  />
                  <h3 className="titre">{resultat.original_title}</h3>
                  <p className="note">
                    Note moyenne {resultat.vote_average}/10{' '}
                  </p>
                </button>
              </div>
            ))}
          </div>

          {/* film selectionné */}
          <div className="theOne">
            {like.map((liked) => (
              <cards className="filmview">
                <h2 className="filmtitle">{liked.original_title} </h2>
                <img
                  alt="Cover"
                  className="cover"
                  src={`https://image.tmdb.org/t/p/w440_and_h660_face${liked.poster_path}`}
                />
                <h3 className="vote">{liked.vote_average}/10</h3>
              </cards>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Filmchoice;

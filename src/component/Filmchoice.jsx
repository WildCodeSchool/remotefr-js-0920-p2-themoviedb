import React from 'react';
import './Filmchoice.css';
import axios from 'axios';
import Selected from './Selected';

class Filmchoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.movieSearch = this.movieSearch.bind(this);
  }
  /** deuxième clès resolve ou movie
   * intialiser avec un tableau vide
   * enturer formulaire ave div  et map sur le tableau dans le state
   */

  fetchMovie = (event) => {
    event.preventDefault();
    const { value } = this.state;
    const url = `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=74d5a2d9e7e8b509e4235d8ff4524d48`;
    axios.get(url).then((response) => {
      return response.data;
    });
  };

  movieSearch(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
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
          <Selected />
        </cover>
      </div>
    );
  }
}
export default Filmchoice;

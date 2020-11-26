import React from 'react';
import './Filmchoice.css';
import axios from 'axios';
import Rating from 'react-rating';
import Modal from 'react-modal';

import apiKey from './apiKey';
import FilmZoom from './FilmZoom';
import SendMovies from './SendMovies';

const customStyles = {
  overlay: {
    zIndex: 100,
  },
  content: {
    padding: 0,
  },
};

class Filmchoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      results: [],
      like: [],
      clicked: 'view',
      choosenOne: 'invisible',
      zoomFilm: null,
      share: false,
    };
    this.movieSearch = this.movieSearch.bind(this);
    this.handleclick = this.handleclick.bind(this);
  }
  /** deuxième clès resolve ou elect
   * intialiser avec un tableau vide
   * enturer formulaire ave div  et map sur le tableau dans le state
   */

  handleclick() {
    this.setState({ share: true });
  }

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
      this.setState({ choosenOne: 'visible' });
      return { like: newlike };
    });
  };

  moreInfo = (liked) => {
    this.setState({
      zoomFilm: liked,
    });
  };

  movieSearch(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const {
      value,
      results,
      like,
      clicked,
      choosenOne,
      zoomFilm,
      share,
    } = this.state;
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
                  <Rating
                    className="rating"
                    name="rating"
                    initialRating={Math.round(resultat.vote_average)}
                    start={0}
                    stop={10}
                    step={2}
                    fractions={2}
                    emptySymbol={
                      <img
                        src="/stars/star-empty.png"
                        alt="star"
                        className="icon"
                      />
                    }
                    fullSymbol={
                      <img
                        src="/stars/star-full.png"
                        alt="star"
                        className="icon"
                      />
                    }
                    readonly
                  />
                </button>
              </div>
            ))}
          </div>

          {/* film selectionné */}
          <h2 className={choosenOne}> Les Elus </h2>
          <div className="theOne">
            {like.map((liked) => (
              <cards className="filmview">
                <button
                  type="button"
                  className="delete"
                  onClick={() => this.movieSelect(liked)}
                >
                  ✂
                </button>
                <button
                  type="button"
                  className="more"
                  onClick={() => this.moreInfo(liked)}
                >
                  <h3 className="filmtitle">{liked.original_title} </h3>
                  <img
                    alt="Cover"
                    className="cover"
                    src={`https://image.tmdb.org/t/p/w440_and_h660_face${liked.poster_path}`}
                  />
                  <Rating
                    className="evaluation"
                    name="rating"
                    initialRating={liked.vote_average}
                    start={0}
                    stop={10}
                    step={2}
                    fractions={2}
                    emptySymbol={
                      <img
                        src="/stars/star-empty.png"
                        alt="star"
                        className="icon"
                      />
                    }
                    fullSymbol={
                      <img
                        src="/stars/star-full.png"
                        alt="star"
                        className="icon"
                      />
                    }
                    readonly
                  />
                </button>
              </cards>
            ))}
            <button type="button" className="btn" onClick={this.handleclick}>
              Envoie ta sélection
            </button>

            <Modal
              isOpen={!!share}
              ariaHideApp={false}
              style={customStyles}
              onRequestClose={() => this.setState({ share: null })}
            >
              <SendMovies />
            </Modal>
            <Modal
              isOpen={!!zoomFilm}
              style={customStyles}
              onRequestClose={() => this.setState({ zoomFilm: null })}
            >
              <div className="details">
                {zoomFilm && (
                  <FilmZoom
                    titre={zoomFilm.original_title}
                    poster={zoomFilm.poster_path}
                    synopsis={zoomFilm.overview}
                    note={zoomFilm.vote_average}
                  />
                )}
              </div>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}
export default Filmchoice;

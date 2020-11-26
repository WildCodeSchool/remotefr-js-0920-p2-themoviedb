import React from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating';
import axios from 'axios';
import apiKey from './apiKey';

class FilmZoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streaming: {},
    };
  }

  getWatchProvidersMovie = () => {
    const { id } = this.props;
    console.log(id);

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${apiKey}`,
      )
      .then((response) => response.data)
      .then((data) => {
        console.log('data.result', data.results.FR);
        this.setState({ streaming: data.results.FR });
      });
  };

  componentDidMount = () => {
    console.log('componentDidMount');
    this.getWatchProvidersMovie();
  };

  render() {
    const { titre, poster, synopsis, note } = this.props;
    const { streaming } = this.state;

    console.log(streaming);

    return (
      <cards className="moreinfo">
        <h3 className="leTitre">
          <span className="titre">{titre}</span>
          <Rating
            className="evaluation"
            name="rating"
            initialRating={note}
            start={0}
            stop={10}
            step={2}
            fractions={2}
            emptySymbol={
              <img src="/stars/star-empty.png" alt="star" className="icon" />
            }
            fullSymbol={
              <img src="/stars/star-full.png" alt="star" className="icon" />
            }
            readonly
          />
        </h3>
        <article>
          <div>
            <p className="resume">{synopsis}</p>
            <h4>Disponible en vente :</h4>
            {streaming.buy === undefined
              ? ''
              : streaming.buy.map((m) => (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${m.logo_path}`}
                    alt={m.provider_name}
                    className="logo"
                  />
                ))}
            <h4>Disponible en location :</h4>
            {streaming.rent === undefined
              ? ''
              : streaming.rent.map((m) => (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${m.logo_path}`}
                    alt={m.provider_name}
                    className="logo"
                  />
                ))}
            <h4>Disponible en streaming :</h4>
            {streaming.flatrate === undefined
              ? ''
              : streaming.flatrate.map((m) => (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${m.logo_path}`}
                    alt={m.provider_name}
                    className="logo"
                  />
                ))}
          </div>
          <img
            alt="Cover"
            className="affiche"
            src={`https://image.tmdb.org/t/p/w440_and_h660_face${poster}`}
          />
        </article>
      </cards>
    );
  }
}
FilmZoom.propTypes = {
  titre: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  note: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

FilmZoom.defaultProps = {};

export default FilmZoom;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MySelectionOfMovies from './MySelectionOfMovies';
import './MySelectionOfMoviesList.css';

function MySelectionOfMoviesList(props) {
  const { movieLiked } = props;

  return (
    <div className="MySelectionOfMoviesList">
      <h2>Tu as choisi&nbsp;: </h2>
      <div className="MySelectionOfMovie">
        {movieLiked.map((singleMovie) => (
          <MySelectionOfMovies
            key={singleMovie.id}
            title={singleMovie.title}
            posterPath={`https://image.tmdb.org/t/p/w440_and_h660_face${singleMovie.poster_path}`}
            tagline={singleMovie.tagline}
          />
        ))}
        <button type="button" className="btn">
          <Link to="/partage">Envoie ta sélection&nbsp;!</Link>
        </button>
      </div>
    </div>
  );
}

MySelectionOfMoviesList.propTypes = {
  movieLiked: PropTypes.arrayOf(PropTypes.number),
};

MySelectionOfMoviesList.defaultProps = {
  movieLiked: [],
};

export default MySelectionOfMoviesList;

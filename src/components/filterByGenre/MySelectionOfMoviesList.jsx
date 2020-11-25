import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MySelectionOfMovies from './MySelectionOfMovies';
import './MySelectionOfMoviesList.css';

function MySelectionOfMoviesList(props) {
  const { movieLiked } = props;

  return (
    <div className="MySelectionOfMoviesList">
      <h2>Ma selection de film : </h2>
      <div className="MySelectionOfMovie">
        {movieLiked.map((singleMovie) => (
          <MySelectionOfMovies
            key={singleMovie.id}
            title={
              singleMovie.title === undefined
                ? singleMovie.name
                : singleMovie.title
            }
            posterPath={`https://image.tmdb.org/t/p/w440_and_h660_face${singleMovie.poster_path}`}
          />
        ))}
        <Link to="/partage">Envoyer ma sélection</Link>
      </div>
    </div>
  );
}

MySelectionOfMoviesList.propTypes = {
  movieLiked: PropTypes.arrayOf(
    PropTypes.shape({
      backdrop_path: PropTypes.string,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
};

MySelectionOfMoviesList.defaultProps = {
  movieLiked: [],
};

export default MySelectionOfMoviesList;

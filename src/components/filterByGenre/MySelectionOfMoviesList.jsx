import React from 'react';
import PropTypes from 'prop-types';
import MySelectionOfMovies from './MySelectionOfMovies';

function MySelectionOfMoviesList(props) {
  const { movieLiked } = props;
  return (
    <div className="MySelectionOfMoviesList">
      <h3>Ma selection de film : </h3>
      {movieLiked === []
        ? ''
        : movieLiked.map((singleMovieLiked) => (
            <MySelectionOfMovies
              key={singleMovieLiked.id}
              title={singleMovieLiked.title}
              posterPath={singleMovieLiked.posterPath}
            />
          ))}
    </div>
  );
}

MySelectionOfMoviesList.propTypes = {
  movieLiked: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterPath: PropTypes.string.isRequired,
    }),
  ),
};

MySelectionOfMoviesList.defaultProps = {
  movieLiked: [],
};

export default MySelectionOfMoviesList;

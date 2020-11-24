import React from 'react';
import PropTypes from 'prop-types';
import MySelectionOfMovies from './MySelectionOfMovies';
import './MySelectionOfMoviesList.css';

function MySelectionOfMoviesList(props) {
  const { movieLiked, arrayResult } = props;

  return (
    <div className="MySelectionOfMoviesList">
      <h2>Ma selection de film : </h2>
      <div className="MySelectionOfMovie">
        {movieLiked === []
          ? ''
          : movieLiked.map((id) =>
              arrayResult
                .filter((movie) => movie.id === id)
                .map(
                  (singleMovieLiked) =>
                    (
                      <MySelectionOfMovies
                        key={singleMovieLiked.id}
                        title={
                          singleMovieLiked.title === undefined
                            ? singleMovieLiked.name
                            : singleMovieLiked.title
                        }
                        posterPath={`https://image.tmdb.org/t/p/w440_and_h660_face${singleMovieLiked.poster_path}`}
                      />
                    ) || console.log(singleMovieLiked),
                ),
            )}
        <button type="button" className="btn">
          Envoyer ma sélection
        </button>
      </div>
    </div>
  );
}

MySelectionOfMoviesList.propTypes = {
  movieLiked: PropTypes.arrayOf(PropTypes.number),
  arrayResult: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
};

MySelectionOfMoviesList.defaultProps = {
  movieLiked: [],
};

export default MySelectionOfMoviesList;

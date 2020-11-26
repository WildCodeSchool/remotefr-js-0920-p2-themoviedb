import React from 'react';
import PropTypes from 'prop-types';
import './MySelectionOfMovies.css';

function MySelectionOfMovies(props) {
  const { title, posterPath, handleLike, movie } = props;
  return (
    <div className="MySelectionOfMovies">
      <div>
        <img src={posterPath} alt="filmcover" className="cover" />
        <p className={title}>{title}</p>
        <button
          type="button"
          className="delete"
          onClick={() => handleLike(movie)}
          title="Retirer de ma sélection"
        >
          ✂
        </button>
      </div>
    </div>
  );
}

MySelectionOfMovies.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  handleLike: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MySelectionOfMovies;

import React from 'react';
import PropTypes from 'prop-types';

function MySelectionOfMovies(props) {
  const { title, posterPath } = props;
  return (
    <div className="MySelectionOfMovies">
      <div>
        <img src={posterPath} alt="filmcover" className="cover" />
        <p className={title}>title</p>
      </div>
    </div>
  );
}

MySelectionOfMovies.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
};

export default MySelectionOfMovies;
